import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ArtworksList({ artworks }) {
  const [offset, setOffset] = useState(
    "https://api.smk.dk/api/v1/art/search/?keys=*&fields=image_thumbnail&fields=titles&fields=id&fields=production&fields=dimensions&fields=current_location_name&fields=production_dates_notes&fields=labels&filters=[image_hq:true],[object_names:painting],[public_domain:true]&offset=`${offset}`&rows=20&lang=en"
  );
  const rowsPerPage = 20;

  function handleNextPage() {
    setOffset(offset + rowsPerPage);
  }

  function handlePreviousPage() {
    setOffset(offset + rowsPerPage);
  }

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
