export default function FavoriteButton({
  artworks,
  artworksInfo,
  onToggleFavorite,
}) {
  console.log("button page hallo");
  console.log("artworks button page:", artworks);
  const toggledArtworkInfo = artworks.artworksInfo.find(
    (artworkInfo) => artworkInfo.id === id
  ) ?? {
    isFavorite: false,
  };
  console.log("artworksInfo:", artworksInfo);
  const isFavorite = toggledArtworkInfo.isFavorite;

  return (
    <>
      <button onClick={onToggleFavorite}>{isFavorite ? "💖" : "❌"}</button>
    </>
  );
}
