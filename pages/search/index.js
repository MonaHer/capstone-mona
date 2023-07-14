import SearchBar from "@/components/SearchBar";

export default function SearchPage({ artworks, searchAllArtworks }) {
  console.log(artworks);
  return (
    <>
      <SearchBar artworks={artworks} searchAllArtworks={searchAllArtworks} />
    </>
  );
}
