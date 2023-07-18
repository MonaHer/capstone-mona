import ArtworkInfo from "@/components/ArtworkInfo/index.js";
import Link from "next/link";
import { useRouter } from "next/router";

export default function ArtworkInfoPage({ artworks, onNoteChange, notes }) {
  const router = useRouter();
  const { id } = router.query;
  const currentArtworkInfo = artworks.items.find((item) => item.id === id);

  /*
  suche in den notes nach dem ersten note, dessen artworkID mit der id übereinstimmt, 
  speichere es currentArtworkNote und gebe es als als prop an die ArtworkInfo-Komponente weiter.
  Das ist wichtig, damit wir die Notiz als value in das Textarea-Element einfügen können.
  */

  const currentArtworkNote = notes.find((note) => note.artworkID === id);

  if (!currentArtworkInfo) {
    return null;
  }

  return (
    <>
      <Link href={`/`}>Go back to Artworkslist</Link>
      <Link href={`/search`}>Go back to search</Link>
      <h1>ArtworkInfoPage</h1>
      <ArtworkInfo
        artwork={currentArtworkInfo}
        note={currentArtworkNote}
        onNoteChange={onNoteChange}
      />
    </>
  );
}
