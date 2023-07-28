import { styled } from "styled-components";
import Link from "next/link";
import FavoriteButton from "@/components/FavoriteButton";
import Image from "next/image";
import Navigation from "@/components/Navigation";

export default function FavoritesPage({
  favorites,
  onToggleFavorite,
  artworks,
}) {
  const favoriteArtworks = favorites.map((favorite) => {
    const artwork = artworks.items.find(
      (artwork) => artwork.id === favorite.favoriteID
    );

    const artworkImage = artwork ? artwork.image_thumbnail : "";
    const artworkTitle = artwork ? artwork.titles[0].title : "";
    return { ...favorite, artworkImage, artworkTitle };
  });

  //   return (
  //     <>
  //       <h1>My favorites</h1>
  //       <StyledList>

  //           {favoriteArtworks.map((favorite) => {
  // return(
  //             <StyledListItem key={favorite.favoriteID}>
  //               <FavoriteButton onClick={onToggleFavorite} />
  //               <Link href={`/artwork-info/${favorite.favoriteID}`}>
  //                 <StyledImageList
  //                   src={favorite.artworkImage}
  //                   alt={"hardgecodet"}
  //                   width={200}
  //                   height={200}
  //                 />
  //               </Link>
  //             </StyledListItem>
  //           )}
  //         ) : (
  //           <p>No favorites</p>
  //           })}
  //       </StyledList>
  //       <Navigation />
  //     </>
  //   );
  // }

  return (
    <>
      <h1>My favorites</h1>
      <StyledList>
        {favoriteArtworks.map((favorite) => {
          return (
            <StyledListItem key={favorite.favoriteID}>
              <FavoriteButton
                onClick={() => onToggleFavorite(favorite.favoriteID)}
                isFavored={true}
              />
              <Link href={`/artwork-info/${favorite.favoriteID}`}>
                <StyledImageList
                  src={favorite.artworkImage}
                  alt={"hardgecodet"}
                  width={200}
                  height={200}
                />
              </Link>
            </StyledListItem>
          );
        })}
        {favoriteArtworks.length === 0 && <p>No favorites</p>}
      </StyledList>
      <Navigation />
    </>
  );
}

const StyledListItem = styled.li`
  text-align: center;
`;

const StyledList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const StyledImageList = styled(Image)`
  height: 50%;
  width: 50%;
  @media (max-width: 768px) {
    height: 90%;
    width: 90%;
  }
`;
