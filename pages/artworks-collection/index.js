import ArtworksList from "@/components/ArtworksList/index.js";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import SearchBar from "@/components/SearchBar";
import { styled } from "styled-components";

export default function ArtworkCollection({
  artworks,
  onHandlePreviousPage,
  onHandleNextPage,
  offset,
  rowsPerPage,
  searchTerm,
  setSearchTerm,
  onHandleSearch,
}) {
  return (
    <>
      <Header />
      <h1>Artworks Collection</h1>
      <SearchBar
        artworks={artworks}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onHandleSearch={onHandleSearch}
      />
      <ArtworksList artworks={artworks} />
      {offset >= rowsPerPage && (
        <StyledButton onClick={onHandlePreviousPage}>
          Previous Page
        </StyledButton>
      )}
      <StyledButton onClick={onHandleNextPage}>Next Page</StyledButton>
      <Navigation />
    </>
  );
}

const StyledButton = styled.button`
  margin-bottom: 80px;
`;
