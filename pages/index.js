import Artworks from "@/components/Artworks";

export default function HomePage({ artworks }) {
  return (
    <>
      <h1>SKM Notes</h1>
      <Artworks artworks={artworks} />
    </>
  );
}
