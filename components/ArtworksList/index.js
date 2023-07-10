import Image from "next/image";
import Link from "next/link";

export default function ArtworksList({ artworks }) {
  return (
    <>
      <ul>
        {artworks.items.map(({ id, image_thumbnail, titles }) => {
          const titleText =
            titles && titles[0] && titles[0].title ? titles[0].title : "";
          return (
            <li key={id}>
              <Link href={`/artwork-info/${id}`}>
                <Image
                  src={image_thumbnail}
                  alt={titleText}
                  height={300}
                  width={300}
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
