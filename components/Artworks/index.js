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
                <p>
                  Title: {item.titles[0].title},
                  {item.production_dates_notes &&
                    item.production_dates_notes[0]}
                </p>
                <p>
                  Creator: {item.production[0].creator_forename}{" "}
                  {item.production[0].creator_surname},
                  {item.production[0].creator_date_of_birth
                    ? item.production[0].creator_date_of_birth.slice(0, 4)
                    : ""}
                  -
                  {item.production[0].creator_date_of_death
                    ? item.production[0].creator_date_of_death.slice(0, 4)
                    : ""}
                </p>
                <p>
                  📐
                  {item.dimensions && item.dimensions[0]
                    ? item.dimensions[0].value
                    : ""}
                  x
                  {item.dimensions && item.dimensions[1]
                    ? item.dimensions[1].value
                    : ""}
                  cm
                </p>
                <p>📍 {item.current_location_name}</p>
                <p>
                  {item.labels && item.labels[0] ? item.labels[0].text : ""}
                </p>
              </li>
            ))}
        </ul>
      </>
    )
  );
}
