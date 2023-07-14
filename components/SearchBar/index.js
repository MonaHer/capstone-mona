import { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

export default function SearchBar({ artworks }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchPerformed, setSearchPerformed] = useState(false);

  function handleInputChange(e) {
    const { value } = e.target;
    setSearchTerm(value);
    if (value === "") {
      setSearchResults([]);
    } else {
      handleSearch(value);
    }
  }

  function handleSearch(value) {
    const filteredArtworks = artworks.items.filter((artwork) => {
      const titleMatch = artwork.titles[0].title
        .toLowerCase()
        .includes(value.toLowerCase());
      const creatorMatch =
        artwork.production[0].creator_forename
          .toLowerCase()
          .includes(value.toLowerCase()) ||
        artwork.production[0].creator_surname
          .toLowerCase()
          .includes(value.toLowerCase()) ||
        `${artwork.production[0].creator_forename} ${artwork.production[0].creator_surname}`
          .toLowerCase()
          .includes(value.toLowerCase());
      return titleMatch || creatorMatch;
    });
    setSearchResults(filteredArtworks);
    setSearchPerformed(true);
  }

  return (
    <>
      <input type="text" value={searchTerm} onChange={handleInputChange} />

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

// {
//   /* <button type="submit" onClick={handleSearch}>
// Search
// </button>
// {searchPerformed && searchResults.length === 0 && (
// <p>No results found.</p>
// )} */
// }
