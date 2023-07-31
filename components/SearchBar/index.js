import { useState } from "react";
import Link from "next/link";
import useLocalStorageState from "use-local-storage-state";
import { mdiMagnify } from "@mdi/js";
import {
  StyledList,
  StyledImage,
  StyledListItem,
  StyledSearchInput,
  StyledMagnifyIcon,
  StyledEndofSearchContainer,
} from "./styles";
import NoResultsContainer from "../NoResultsContainer";

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

          <hr />
          <StyledEndofSearchContainer>
            End of search results.
          </StyledEndofSearchContainer>
          <hr />
        </>
      )}

      {searchPerformed && searchResults.length === 0 && (
        <NoResultsContainer>
          <p>No results found.</p>
        </NoResultsContainer>
      )}
    </>
  );
}
