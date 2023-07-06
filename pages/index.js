import Artworks from "../components/Artworks/index.js";
import useSWR from "swr";
import Image from "next/image";

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

export default function HomePage() {
  const {
    data: artworks,
    error,
    isLoading,
  } = useSWR(
    "https://api.smk.dk/api/v1/art/?object_number=kms1&lang=en",
    fetcher
  );

  if (error) {
    console.log("erorr");
  }
  if (isLoading) {
    console.log("loading");
  }
  return (
    console.log(artworks),
    (
      <div>
        <h1>SKM Notes</h1>
        <ul>
          {artworks &&
            artworks.items.map((item) => (
              <li key={item.id}>
                <h3>{item.titles[0].title}</h3>
                <Image alt="titans">{item.image_thumbnail}</Image>
              </li>
            ))}
        </ul>
      </div>
    )
  );
}
