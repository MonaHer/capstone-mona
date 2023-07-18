import ArtworkInfo from "@/components/ArtworkInfo/index.js";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function ArtworkInfoPage({ artworks, onNoteChange, notes }) {
  const router = useRouter();
  const { id } = router.query;
  const currentArtworkInfo = artworks.items.find((item) => item.id === id);

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
        notes={notes}
        onNoteChange={onNoteChange}
      />
    </>
  );
}
