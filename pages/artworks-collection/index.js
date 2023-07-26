import ArtworksList from "@/components/ArtworksList/index.js";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import SearchBar from "@/components/SearchBar";
import { styled } from "styled-components";

export default function ArtworkCollection({
  artworks,
  searchTerm,
  setSearchTerm,
  onHandleSearch,
}) {
  return (
    <>
      {/* <Header /> */}
      <SearchBar
        artworks={artworks}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onHandleSearch={onHandleSearch}
      />
      <ArtworksList artworks={artworks} />
      <Navigation />
    </>
  );
}

const StyledButton = styled.button`
  margin-bottom: 80px;
`;
