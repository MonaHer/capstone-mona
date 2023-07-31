import Link from "next/link";
import StyledNoResultsContainer from "../NoResultsContainer";
import StyledPageTitle from "../StyledTitle";
import {
  StyledList,
  StyledListItem,
  StyledImageList,
} from "../../components/StyledImageList";

export default function FavoritesFunction(favorites, artworks) {
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
    </>
  );
}
