import ArtworkInfo from "@/components/ArtworkInfo/index.js";
import Navigation from "@/components/Navigation";
import Header from "@/components/Header";
import { useRouter } from "next/router";

export default function ArtworkInfoPage({ artworks, onNoteChange, notes }) {
  const router = useRouter();
  const { id } = router.query;
  const currentArtworkInfo = artworks.items.find((item) => item.id === id);

  const currentArtworkNote = notes.find((note) => note.artworkID === id);

  if (!currentArtworkInfo) {
    return null;
  }

  return (
    <>
      <Header />
      <h1>ArtworkInfoPage</h1>
      <ArtworkInfo
        artwork={currentArtworkInfo}
        note={currentArtworkNote}
        onNoteChange={onNoteChange}
      />
      <Navigation />
    </>
  );
}
