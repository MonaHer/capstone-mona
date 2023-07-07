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

export default function Artworks() {
  const {
    data: artworks,
    error,
    isLoading,
  } = useSWR(
    "https://api.smk.dk/api/v1/art/search/?keys=*&fields=image_thumbnail&fields=titles&fields=id&filters=[image_hq:true],[object_names:maleri],[public_domain:true]&offset=0&rows=2000",
    fetcher
  );

  if (error) {
    return <div>failed to load</div>;
  }
  if (isLoading) {
    return <div>loading...</div>;
  }
  return (
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
            </li>
          ))}
      </ul>
    </>
  );
}
