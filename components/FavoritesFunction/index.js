import Link from "next/link";
import NoResultsContainer from "../NoResultsContainer/index.js";
import StyledPageTitle from "../StyledTitle/index.js";
import {
  StyledList,
  StyledListItem,
  StyledImage,
} from "../StyledImageList/index.js";

export default function FavoritesFunction({ favorites, artworks }) {
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
      <StyledPageTitle>My Favorites Collection</StyledPageTitle>

      <StyledList>
        {favoriteArtworks.map((favorite) => {
          return (
            <StyledListItem key={favorite.favoriteID}>
              <Link href={`/artwork-info/${favorite.favoriteID}`}>
                <StyledImage
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
          <NoResultsContainer>
            <p>No favorites yet.</p>
          </NoResultsContainer>
        )}
      </StyledList>
    </>
  );
}
