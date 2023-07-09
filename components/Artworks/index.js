import Image from "next/image";
import Link from "next/link";

export default function Artworks({ artworks }) {
  return (
    console.log(artworks),
    (
      <>
        <ul>
          {artworks &&
            artworks.items.map((item) => (
              <li key={item.id}>
                <Link href={`/artwork-info/artwork-info`}>
                  <Image
                    src={item.image_thumbnail}
                    alt={item.title}
                    height={300}
                    width={300}
                  />
                </Link>
              </li>
            ))}
        </ul>
      </>
    )
  );
}
