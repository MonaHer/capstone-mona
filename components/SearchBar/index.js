import { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import useLocalStorageState from "use-local-storage-state";

export default function SearchBar({ artworks }) {
  const [searchTerm, setSearchTerm] = useLocalStorageState("searchTerm", "");
  const [searchResults, setSearchResults] = useState([]);
  const [searchPerformed, setSearchPerformed] = useState(false);

  function searchAllArtworks(value) {
    const allArtworks = artworks.items;

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

  function handleInputChange(e) {
    const { value } = e.target;
    setSearchTerm(value);
    if (value === "") {
      setSearchResults([]);
      setSearchPerformed(false);
    } else {
      const filteredArtworks = searchAllArtworks(value);
      setSearchResults(filteredArtworks);
      setSearchPerformed(true);
    }

    const filteredArtworks = searchAllArtworks(value);
    setSearchResults(filteredArtworks);
    setSearchPerformed(true);
  }

  const isNoSearchTerm = searchTerm === "";

  return (
    <>
      <input type="text" value={searchTerm} onChange={handleInputChange} />
      {!isNoSearchTerm && searchResults.length > 0 && (
        <StyledList>
          {searchResults.map(({ id, image_thumbnail, titleText }) => {
            return (
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
            );
          })}
        </StyledList>
      )}
      {searchPerformed && searchResults.length === 0 && (
        <p>No results found.</p>
      )}
      {!searchPerformed && searchTerm === "" && null}
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
