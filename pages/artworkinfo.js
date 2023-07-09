import ArtworkInfo from "@/components/ArtworkInfo";

export default function ArtworkInfoPage({ artworks }) {
  return (
    <>
      <h1>ArtworkInfoPage</h1>
      <ArtworkInfo artworks={artworks} />
    </>
  );
}
