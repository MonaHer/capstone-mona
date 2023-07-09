import ArtworkInfo from "@/components/ArtworkInfo";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

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
      <Image
        src={currentArtworkInfo.image_thumbnail}
        alt={currentArtworkInfo.title}
        height={300}
        width={300}
      />
    </>
  );
}
