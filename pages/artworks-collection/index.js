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
  onToggleFavorite,
  favorites,
}) {
  return (
    <>
      {/* <Header /> */}
      <SearchBar
        artworks={artworks}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onHandleSearch={onHandleSearch}
        favorites={favorites}
        onToggleFavorite={onToggleFavorite}
      />
      <ArtworksList
        artworks={artworks}
        favorites={favorites}
        onToggleFavorite={onToggleFavorite}
      />
      <Navigation />
    </>
  );
}

const StyledButton = styled.button`
  margin-bottom: 80px;
`;
