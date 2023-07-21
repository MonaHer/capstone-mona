import Link from "next/link";
import Image from "next/image";

export default function RandomCover({ artworks }) {
  const randomArtwork =
    artworks.items[Math.floor(Math.random() * artworks.items.length)];
  console.log(artworks);
  return (
    <>
      <Link href={`/artwork-info/${randomArtwork.id}`}>
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
