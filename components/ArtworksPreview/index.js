import Image from "next/image";

export default function ArtworksPreview({ image, title }) {
  return (
    <>
      <Image src={image} alt={title} height={300} width={300} />
    </>
  );
}
