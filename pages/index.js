import ArtworksList from "@/components/ArtworksList/index.js";

export default function HomePage({ artworks }) {
  return (
    <>
      <h1>SKM Notes</h1>
      <ArtworksList artworks={artworks} />
    </>
  );
}
