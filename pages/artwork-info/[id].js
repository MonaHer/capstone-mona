import ArtworkInfo from "@/components/ArtworkInfo";
import Link from "next/link";
import { useRouter } from "next/router";

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
      <p>{currentArtworkInfo.titles[0].title}</p>
      <ArtworkInfo
        image={currentArtworkInfo.image_thumbnail}
        title={currentArtworkInfo.titles[0].title}
      />
    </>
  );
}
