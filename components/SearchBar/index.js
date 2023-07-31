import { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import useLocalStorageState from "use-local-storage-state";
import Icon from "@mdi/react";
import { mdiMagnify } from "@mdi/js";

export default function SearchBar({ artworks }) {
  const [searchTerm, setSearchTerm] = useLocalStorageState("searchTerm", {
    defaultValue: "",
  });
  const [searchResults, setSearchResults] = useLocalStorageState(
    "searchResults",
    { defaultValue: [] }
  );

  const [searchPerformed, setSearchPerformed] = useState(false);

  function handleInputChange(event) {
    const { value } = event.target;
    setSearchTerm(value);
    if (value === "") {
      setSearchResults([]);
      setSearchPerformed(false);
    } else {
      const filteredArtworks = searchAllArtworks(value);
      setSearchResults(filteredArtworks);
      setSearchPerformed(true);
      window.scrollTo(0, 0);
    }
  }

  function searchAllArtworks(value) {
    const filteredArtworks = artworks.items.filter((artwork) => {
      const titleMatch = artwork.titles.some((title) =>
        title.title?.toString()?.toLowerCase().includes(value.toLowerCase())
      );
      const creatorMatch =
        artwork.production[0]?.creator_forename
          ?.toString()
          ?.toLowerCase()
          .includes(value.toLowerCase()) ||
        artwork.production[0]?.creator_surname
          ?.toString()
          ?.toLowerCase()
          .includes(value.toLowerCase()) ||
        `${artwork.production[0]?.creator_forename} ${artwork.production[0]?.creator_surname}`
          ?.toString()
          ?.toLowerCase()
          .includes(value.toLowerCase());
      return titleMatch || creatorMatch;
    });
    return filteredArtworks;
  }

  const isNoSearchTerm = searchTerm === "";
  return (
    <>
      <StyledMagnifyIcon path={mdiMagnify} size={1.4} />

      <StyledSearchInput
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="What are you looking for?"
      />

      {!isNoSearchTerm && searchResults.length > 0 && (
        <>
          <StyledList>
            {searchResults.map(({ filteredArtwork, id, image_thumbnail }) => {
              const titleText = filteredArtwork
                ? filteredArtwork.titles[0].title
                : "";
              return (
                <>
                  <StyledListItem key={id}>
                    <Link href={`/artwork-info/${id}`}>
                      <StyledImage
                        src={image_thumbnail}
                        alt={titleText}
                        width={200}
                        height={200}
                      />
                    </Link>
                  </StyledListItem>
                </>
              );
            })}
          </StyledList>

          <hr />
          <StyledEndofSearchContainer>
            End of search results.
          </StyledEndofSearchContainer>
          <hr />
        </>
      )}

      {searchPerformed && searchResults.length === 0 && (
        <StyledNoResultsContainer>
          <p>No results found.</p>
        </StyledNoResultsContainer>
      )}
    </>
  );
}

const StyledList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const StyledImage = styled(Image)`
  height: 90%;
  width: 90%;
`;

const StyledListItem = styled.li`
  text-align: center;
`;

const StyledSearchInput = styled.input`
  position: absolute;
  background-color: transparent;
  position: fixed;
  top: 20px;
  left: 20px;
  right: 20px;
  width: 80%;
  height: 40px;
  color: whitesmoke;
  border: none;
  padding: 10px;
  margin: 20px auto;

  &::placeholder {
    color: whitesmoke;
  }

  &:focus {
    outline: 2px solid hotpink;
  }
`;

const StyledMagnifyIcon = styled(Icon)`
  position: relative;
  position: fixed;
  left: 1580px;
  top: 41px;
  @media (max-width: 768px) {
    position: relative;
    position: fixed;
    left: 300px;
    top: 43px;
  }
`;

const StyledNoResultsContainer = styled.div`
  text-align: center;
  margin-top: 140px;
  margin-bottom: 80px;
`;

const StyledEndofSearchContainer = styled.div`
  text-align: center;
`;
