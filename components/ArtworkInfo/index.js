import Image from "next/image";

export default function ArtworkInfo({ item }) {
  return (
    <>
      <Image
        src={item.image_thumbnail}
        alt={item.title}
        height={300}
        width={300}
      />
    </>
  );
}
