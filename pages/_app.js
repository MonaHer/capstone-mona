import GlobalStyle from "../styles";
import useSWR from "swr";
import { useState } from "react";
import useLocalStorageState from "use-local-storage-state";

const fetcher = async (url) => {
  const res = await fetch(url);

  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data.");
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  return res.json();
};

export default function App({ Component, pageProps }) {
  const rowsPerPage = 1900;

  const [offset, setOffset] = useState(0);

  const [notes, setNotes] = useLocalStorageState("_NOTE", {
    defaultValue: [],
  });
  const [searchTerm, setSearchTerm] = useState("");

  const [favorites, setFavorites] = useLocalStorageState("_FAVORITES", {
    defaultValue: [],
  });

  const {
    data: artworks,
    error,
    isLoading,
  } = useSWR(
    `https://api.smk.dk/api/v1/art/search/?keys=*&fields=image_thumbnail&fields=titles&fields=id&fields=production&fields=dimensions&fields=current_location_name&fields=production_dates_notes&fields=labels&filters=[image_hq:true],[object_names:painting],[public_domain:true]&offset=${offset}&rows=${rowsPerPage}&lang=en`,
    fetcher
  );

  if (error) {
    return <div>failed to load</div>;
  }
  if (isLoading) {
    return <div>loading...</div>;
  }

  function handleSearch(searchTerm) {
    if (searchTerm === "") {
      setSearchTerm("");
    } else {
      setSearchTerm(searchTerm);
    }
  }

  function handleUpdateNote(artworkID, text) {
    setNotes((notes) => {
      const noteExists = notes.find((note) => note.artworkID === artworkID);

      if (noteExists) {
        return notes.map((note) =>
          note.artworkID === artworkID ? { ...note, text } : note
        );
      }
      return [...notes, { artworkID, text }];
    });
  }

  function handleToggleFavorite(favoriteID) {
    setFavorites((favorites) => {
      const isFavored = favorites.some(
        (favorite) => favorite.favoriteID === favoriteID
      );
      if (isFavored) {
        return favorites.filter(
          (favorite) => favorite.favoriteID !== favoriteID
        );
      }
      return [...favorites, { favoriteID }];
    });
  }

  return (
    <>
      <GlobalStyle />

      <Component
        {...pageProps}
        artworks={artworks}
        offset={offset}
        rowsPerPage={rowsPerPage}
        notes={notes}
        onNoteChange={handleUpdateNote}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onHandleSearch={handleSearch}
        favorites={favorites}
        onToggleFavorite={handleToggleFavorite}
      />
    </>
  );
}
