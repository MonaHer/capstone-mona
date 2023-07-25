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
  const rowsPerPage = 10;

  const [offset, setOffset] = useState(0);
  // const [totalPages, setTotalPages] = useState(10);

  const [notes, setNotes] = useLocalStorageState("_NOTE", {
    defaultValue: [],
  });
  const [searchTerm, setSearchTerm] = useState("woman");

  const {
    data: artworks,
    error,
    isLoading,
  } = useSWR(
    `https://api.smk.dk/api/v1/art/search/?keys=*&fields=image_thumbnail&fields=titles&fields=id&fields=production&fields=dimensions&fields=current_location_name&fields=production_dates_notes&fields=labels&filters=[image_hq:true],[object_names:painting],[public_domain:true]&offset=${offset}&rows=1000&lang=en`,
    fetcher
  );

  // onSuccess: (data) => {
  //   setTotalPages(data.pagination.total_pages);
  // };

  if (error) {
    return <div>failed to load</div>;
  }
  if (isLoading) {
    return <div>loading...</div>;
  }

  // function handlePreviousPage() {
  //   if (offset - rowsPerPage >= 0) {
  //     setOffset((prevOffset) => prevOffset - rowsPerPage);
  //   }
  // }

  // function handleNextPage() {
  //   if (offset + rowsPerPage < totalPages * rowsPerPage) {
  //     setOffset((prevOffset) => prevOffset + rowsPerPage);
  //   }
  // }

  function handleSearch(searchTerm) {
    if (searchTerm === "") {
      setSearchTerm("woman");
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

  return (
    <>
      <GlobalStyle />

      <Component
        {...pageProps}
        artworks={artworks}
        // onHandlePreviousPage={handlePreviousPage}
        // onHandleNextPage={handleNextPage}
        offset={offset}
        rowsPerPage={rowsPerPage}
        notes={notes}
        onNoteChange={handleUpdateNote}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onHandleSearch={handleSearch}
        // totalPages={totalPages}
      />
    </>
  );
}
