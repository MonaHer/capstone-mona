import ArtworkInfo from "@/components/ArtworkInfo/index.js";
import { useRouter } from "next/router";

export default function ArtworkInfoPage({
  artworks,
  onNoteChange,
  notes,
  favorites,
  onToggleFavorite,
}) {
  const router = useRouter();
  const { id } = router.query;
  const currentArtworkInfo = artworks.items.find((item) => item.id === id);

  const currentArtworkNote = notes.find((note) => note.artworkID === id);

  const currenArtworkFavorite = favorites.find(
    (favorite) => favorite.favoriteID === id
  );

  if (!currentArtworkInfo) {
    return null;
  }

  return (
    <>
      <h1>ArtworkInfoPage</h1>
      <ArtworkInfo
        artwork={currentArtworkInfo}
        note={currentArtworkNote}
        onNoteChange={onNoteChange}
        favorites={favorites}
        onToggleFavorite={onToggleFavorite}
      />
    </>
  );
}
