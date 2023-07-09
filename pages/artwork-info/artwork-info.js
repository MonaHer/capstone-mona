import ArtworkInfo from "@/components/ArtworkInfo";
import { useRouter } from "next/router";

export default function ArtworkInfoPage({ artworks }) {
  /*const router = useRouter();
  const { id } = router.query;

  const currentArtworkInfo = artworks.find(
    (artwork) => artwork.item.id === item.id
  );

  if (!currentArtworkInfo) {
    return null;
  }*/
  return (
    <>
      <h1>ArtworkInfoPage</h1>
      <ArtworkInfo artworks={artworks} />
    </>
  );
}
