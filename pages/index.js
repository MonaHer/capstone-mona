import ArtworksList from "@/components/ArtworksList/index.js";
import Link from "next/link";
import Navigation from "@/components/Navigation";

export default function HomePage({
  artworks,
  onHandlePreviousPage,
  onHandleNextPage,
  offset,
  rowsPerPage,
}) {
  return (
    <>
      <h1>SMK Notes</h1>

      <ArtworksList artworks={artworks} />
      {offset >= rowsPerPage && (
        <button onClick={onHandlePreviousPage}>Previous Page</button>
      )}
      <button onClick={onHandleNextPage}>Next Page</button>
      <Navigation />
    </>
  );
}
