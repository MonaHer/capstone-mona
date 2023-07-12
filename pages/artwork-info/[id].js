import ArtworkInfo from "@/components/ArtworkInfo/index.js";
import Link from "next/link";
import { useRouter } from "next/router";
import NotesArea from "@/components/NotesArea";
import { useState } from "react";

export default function ArtworkInfoPage({ artworks }) {
  const router = useRouter();
  const { id } = router.query;
  const currentArtworkInfo = artworks.items.find((item) => item.id === id);

  const [note, setNote] = useState(() => {
    const storedNote = localStorage.getItem(id);
    return storedNote || "";
  });

  const handleNoteChange = (newNote) => {
    setNote(newNote);
    localStorage.setItem(id, newNote);
  };

  if (!currentArtworkInfo) {
    return null;
  }

  return (
    <>
      <Link href={`/`}>Go back to Artworkslist</Link>
      <h1>ArtworkInfoPage</h1>
      <ArtworkInfo artwork={currentArtworkInfo} />
      <NotesArea note={note} onNoteChange={handleNoteChange} />
    </>
  );
}
