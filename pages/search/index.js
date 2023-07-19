import SearchBar from "@/components/SearchBar";
import Link from "next/link";
import Navigation from "@/components/Navigation";

export default function SearchPage({
  artworks,
  searchAllArtworks,
  searchTerm,
}) {
  return (
    <>
      <SearchBar
        artworks={artworks}
        searchAllArtworks={searchAllArtworks}
        searchTerm={searchTerm}
      />
      <Navigation />
    </>
  );
}
