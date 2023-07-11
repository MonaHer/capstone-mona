import ArtworkInfo from "@/components/ArtworkInfo/index.js";
import Link from "next/link";
import { useRouter } from "next/router";
import NotesArea from "@/components/NotesArea";

export default function ArtworkInfoPage({ artworks }) {
  const router = useRouter();
  const { id } = router.query;
  const currentArtworkInfo = artworks.items.find((item) => item.id === id);

  if (!currentArtworkInfo) {
    return null;
  }

  return (
    <>
      <Link href={`/`}>Go back to Artworkslist</Link>
      <h1>ArtworkInfoPage</h1>
      <ArtworkInfo artwork={currentArtworkInfo} />
      <NotesArea note={note} onNoteChange={onNoteChange} />
    </>
  );
}
