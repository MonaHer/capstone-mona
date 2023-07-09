import ArtworkInfo from "@/components/ArtworkInfo";
import Link from "next/link";

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
      <Link href={`/`}>Go back to Artworkslist</Link>
      <h1>ArtworkInfoPage</h1>
      <ArtworkInfo artworks={artworks} />
    </>
  );
}
