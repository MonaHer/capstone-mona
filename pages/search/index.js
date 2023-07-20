import SearchBar from "@/components/SearchBar";

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
    </>
  );
}
