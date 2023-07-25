import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import SearchBar from "@/components/SearchBar";
import useSWR from "swr";
import { useState } from "react";
import useLocalStorageState from "use-local-storage-state";
import ArtworksList from "@/components/ArtworksList";

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

export default function SearchPage({}) {
  const rowsPerPage = 20;

  const [offset, setOffset] = useState(0);

  const [notes, setNotes] = useLocalStorageState("_NOTE", {
    defaultValue: [],
  });
  const [searchTerm, setSearchTerm] = useState("*");

  const {
    data: artworks,
    error,
    isLoading,
    mutate,
  } = useSWR(
    `https://api.smk.dk/api/v1/art/search/?keys=${searchTerm}&fields=image_thumbnail&fields=titles&fields=id&fields=production&fields=dimensions&fields=current_location_name&fields=production_dates_notes&fields=labels&filters=[image_hq:true],[object_names:painting],[public_domain:true]&offset=${offset}&rows=${rowsPerPage}&lang=en`,
    fetcher
  );

  if (error) {
    return <div>failed to load</div>;
  }
  if (isLoading) {
    return <div>loading...</div>;
  }

  function handlePreviousPage() {
    if (offset - 30 >= 0) {
      setOffset((prevOffset) => prevOffset - 30);
    }
  }

  function handleNextPage() {
    setOffset((prevOffset) => prevOffset + 30);
  }

  function handleSearch(searchTerm) {
    if (searchTerm === "") {
      setSearchTerm("*");
    } else {
      setSearchTerm(searchTerm);
    }
  }
  {
    return (
      <>
        <Header />
        <SearchBar
          artworks={artworks}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          onHandleSearch={handleSearch}
        />
        <ArtworksList artworks={artworks} />
        <Navigation />
      </>
    );
  }
}
