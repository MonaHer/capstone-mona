import ArtworksList from "@/components/ArtworksList/index.js";
import Link from "next/link";

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
      <Link href={`/search`}>Go to search</Link>
      <ArtworksList artworks={artworks} />
      {offset >= rowsPerPage && (
        <button onClick={onHandlePreviousPage}>Previous Page</button>
      )}
      <button onClick={onHandleNextPage}>Next Page</button>
    </>
  );
}
