import { styled } from "styled-components";
import Link from "next/link";
import {
  StyledList,
  StyledListItem,
  StyledImageList,
} from "../../components/StyledImageList";
import Navigation from "@/components/Navigation";
import Header from "@/components/Header";

export default function FavoritesPage({ favorites, artworks }) {
  const favoriteArtworks = favorites.map((favorite) => {
    const artwork = artworks.items.find(
      (artwork) => artwork.id === favorite.favoriteID
    );

    const artworkImage = artwork ? artwork.image_thumbnail : "";
    const artworkTitle = artwork ? artwork.titles[0].title : "";
    return { ...favorite, artworkImage, artworkTitle };
  });

  return (
    <>
      <Header />
      <StyledTitle>My Favorites Collection</StyledTitle>

      <StyledList>
        {favoriteArtworks.map((favorite) => {
          return (
            <StyledListItem key={favorite.favoriteID}>
              <Link href={`/artwork-info/${favorite.favoriteID}`}>
                <StyledImageList
                  src={favorite.artworkImage}
                  alt={favorite.artworkTitle}
                  width={200}
                  height={200}
                />
              </Link>
            </StyledListItem>
          );
        })}
        {favoriteArtworks.length === 0 && (
          <StyledNoResultsContainer>
            <p>No favorites yet.</p>
          </StyledNoResultsContainer>
        )}
      </StyledList>
      <Navigation />
    </>
  );
}

const StyledTitle = styled.h2`
  border: 1px solid whitesmoke;
  padding: 10px;
  text-align: center;
  margin-left: 5%;
  margin-right: 5%;
`;

const StyledNoResultsContainer = styled.div`
  text-align: center;
  margin-top: 140px;
  margin-bottom: 80px;
`;
