import ArtworksList from "@/components/ArtworksList/index.js";
import Navigation from "@/components/Navigation";
import Header from "@/components/Header";

export default function HomePage({
  artworks,
  onHandlePreviousPage,
  onHandleNextPage,
  offset,
  rowsPerPage,
}) {
  return (
    <>
      <Header />
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
