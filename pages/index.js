import ArtworksList from "@/components/ArtworksList/index.js";
import SearchBar from "@/components/SearchBar/index.js";
import Link from "next/link";

export default function HomePage({
  artworks,
  onHandlePreviousPage,
  onHandleNextPage,
  offset,
  rowsPerPage,
  onHandleSearch,
}) {
  return (
    <>
      <SearchBar onHandleSearch={onHandleSearch} artworks={artworks} />
      <h1>SMK Notes</h1>
      <ArtworksList artworks={artworks} />
      {offset >= rowsPerPage && (
        <button onClick={onHandlePreviousPage}>Previous Page</button>
      )}
      <button onClick={onHandleNextPage}>Next Page</button>
    </>
  );
}
