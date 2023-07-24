import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import SearchBar from "@/components/SearchBar";

export default function SearchPage({
  artworks,
  searchAllArtworks,
  searchTerm,
  setSearchTerm,
  onHandleSearch,
}) {
  return (
    <>
      <Header />
      <SearchBar
        artworks={artworks}
        searchAllArtworks={searchAllArtworks}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onHandleSearch={onHandleSearch}
      />
      <Navigation />
    </>
  );
}
