import Image from "next/image";
import useSWR from "swr";
import ArtworkPreview from "../ArtworkPreview/index.js";
import ArtworkInfo from "../ArtworkInfo/index.js";

const fetcher = async (url) => {
  const res = await fetch(url);

  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data.");
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  return res.json();
};

export default function Artworks() {
  const {
    data: artworks,
    error,
    isLoading,
  } = useSWR(
    "https://api.smk.dk/api/v1/art/search/?keys=*&fields=image_thumbnail&fields=titles&fields=id&fields=dimensions&fields=current_location_name&fields=production&fields=production_date&fields=labels&filters=[image_hq:true],[object_names:maleri],[public_domain:true]&offset=0&rows=2000",
    fetcher
  );

  if (error) {
    return <div>failed to load</div>;
  }
  if (isLoading) {
    return <div>loading...</div>;
  }

  return (
    console.log(artworks),
    (
      <>
        <ul>
          {artworks &&
            artworks.items.map((item) => (
              <li key={item.id}>
                <Image
                  src={item.image_thumbnail}
                  alt={item.title}
                  height={300}
                  width={300}
                />
                <p>
                  Title: {item.titles[0].title},{item.production_date[0].period}
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
                    : ""}{" "}
                  x{" "}
                  {item.dimensions && item.dimensions[1]
                    ? item.dimensions[1].value
                    : ""}{" "}
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

/*{item.dimensions[0].value}*/
