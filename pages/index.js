import ArtworksList from "@/components/ArtworksList/index.js";
import { useRouter } from "next/router";
import { useState } from "react";

export default function HomePage({ artworks }) {
  const [offset, setOffset] = useState(0);
  const rowsPerPage = 20;
  const router = useRouter();

  function handleNextPage() {
    setOffset((prevOffset) => prevOffset + rowsPerPage);
    router.push(`/artworks?offset=${offset + rowsPerPage}`);
  }

  function handlePreviousPage() {
    if (offset >= rowsPerPage) {
      setOffset((prevOffset) => prevOffset - rowsPerPage);
      router.push(`/artworks?offset=${offset - rowsPerPage}`);
    }
  }

  return (
    <>
      <h1>SMK Notes</h1>
      <ArtworksList artworks={artworks} />
      <button onClick={handlePreviousPage}>Previous Page</button>
      <button onClick={handleNextPage}>Next Page</button>
    </>
  );
}
