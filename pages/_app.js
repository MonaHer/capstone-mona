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
  const rowsPerPage = 20;
  const rowsPerPageSearch = 1807;
  const [offset, setOffset] = useState(0);
  const [note, setNote] = useLocalStorageState("note", { defaultValue: 0 });
  const [textAreaValue, setTextAreaValue] = useState("");
  const [artworksInfo, setArtworksInfo] = useLocalStorageState("artworksInfo", {
    defaultValue: [],
  });

  const {
    data: artworks,
    error,
    isLoading,
    mutate,
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

  function handlePreviousPage() {
    setOffset((prevOffset) => prevOffset - rowsPerPage);

    mutate(
      `https://api.smk.dk/api/v1/art/search/?keys=*&fields=image_thumbnail&fields=titles&fields=id&fields=production&fields=dimensions&fields=current_location_name&fields=production_dates_notes&fields=labels&filters=[image_hq:true],[object_names:painting],[public_domain:true]&offset=${
        offset - rowsPerPage
      }&rows=${rowsPerPage}&lang=en`
    );
  }

  function handleNextPage() {
    setOffset((prevOffset) => prevOffset + rowsPerPage);

    mutate(
      `https://api.smk.dk/api/v1/art/search/?keys=*&fields=image_thumbnail&fields=titles&fields=id&fields=production&fields=dimensions&fields=current_location_name&fields=production_dates_notes&fields=labels&filters=[image_hq:true],[object_names:painting],[public_domain:true]&offset=${
        offset + rowsPerPage
      }&rows=${rowsPerPage}&lang=en`
    );
  }
  function handleNoteChange(newNote) {
    setNote(newNote);
  }

  const handleTextAreaValue = (event) => {
    setTextAreaValue(event.target.value);
  };

  function handleToggleFavorite(id) {
    setArtworksInfo((artworksInfo) => {
      const info = artworksInfo.find((info) => info.id === id);
      if (info) {
        return artworksInfo.map((info) =>
          info.id === id ? { ...info, isFavorite: !info.isFavorite } : info
        );
      }
      return [...artworksInfo, { id, isFavorite: true }];
    });
  }
  const { id } = artworks.items;
  console.log("app.js:", artworks);
  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        artworks={artworks}
        onHandlePreviousPage={handlePreviousPage}
        onHandleNextPage={handleNextPage}
        offset={offset}
        rowsPerPage={rowsPerPage}
        note={note}
        onNoteChange={handleNoteChange}
        onHandleTextAreaValue={handleTextAreaValue}
        onToggleFavorite={handleToggleFavorite}
        artworksInfo={artworksInfo}
        id={id}
      />
    </>
  );
}
