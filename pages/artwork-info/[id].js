import ArtworkInfo from "@/components/ArtworkInfo/index.js";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function ArtworkInfoPage({ artworks, onHandleTextAreaValue }) {
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
      <Link href={`/search`}>Go back to search</Link>
      <h1>ArtworkInfoPage</h1>
      <ArtworkInfo
        artwork={currentArtworkInfo}
        note={note}
        onNoteChange={handleNoteChange}
        onHandleTextAreaValue={onHandleTextAreaValue}
      />
    </>
  );
}
