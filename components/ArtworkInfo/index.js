import Artworks from "../Artworks/index.js";
import Image from "next/image";

export default function ArtworkInfo({ artworks }) {
  return (
    <>
      <Image
        src={artworks.image_thumbnail}
        alt={item.title}
        height={300}
        width={300}
      />
    </>
  );
}
