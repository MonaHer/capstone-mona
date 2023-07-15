import SearchBar from "@/components/SearchBar";
import Link from "next/link";

export default function SearchPage({ artworks, searchAllArtworks }) {
  console.log(artworks);
  return (
    <>
      <Link href={`/`}>Go back to ArtworksList</Link>
      <SearchBar artworks={artworks} searchAllArtworks={searchAllArtworks} />
    </>
  );
}
