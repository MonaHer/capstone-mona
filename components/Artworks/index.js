import useSWR from "swr";
import ArtworksPreview from "../ArtworksPreview/index.js";

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

export default function Artworks({ artworks }) {
  const { data, error, isLoading } = useSWR(
    "https://api.smk.dk/api/v1/art/?object_number=kms1&lang=en",
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
      {artworks.map((artwork) => (
        <li key={id}>
          <ArtworksPreview image={imageSource} />
        </li>
      ))}
    </>
  );
}
