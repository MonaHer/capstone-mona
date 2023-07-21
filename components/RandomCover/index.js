import Link from "next/link";
import Image from "next/image";

export default function RandomCover({ artworks }) {
  const randomArtwork = artworks[Math.floor(Math.random() * artworks.length)];
  return (
    <>
      <Link href={`/artwork-info/${id}`}>
        <Image
          src={randomArtwork.image_thumbnail}
          alt={randomArtwork.titleText}
          width={200}
          height={200}
        />
      </Link>
    </>
  );
}
