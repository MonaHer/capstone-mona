import ArtworksList from "@/components/ArtworksList/index.js";
import Header from "@/components/Header";
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
      <Header />
      <h1>Artworks Collection</h1>
      <ArtworksList artworks={artworks} />
      {offset >= rowsPerPage && (
        <button onClick={onHandlePreviousPage}>Previous Page</button>
      )}
      <button onClick={onHandleNextPage}>Next Page</button>
      <Navigation />
    </>
  );
}
