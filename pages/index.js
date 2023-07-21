import ArtworksList from "@/components/ArtworksList/index.js";
import RandomCover from "@/components/RandomCover";

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
      <RandomCover artworks={artworks} />
      <ArtworksList artworks={artworks} />
      {offset >= rowsPerPage && (
        <button onClick={onHandlePreviousPage}>Previous Page</button>
      )}
      <button onClick={onHandleNextPage}>Next Page</button>
    </>
  );
}
