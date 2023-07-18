import ArtworksList from "@/components/ArtworksList";
import Link from "next/link";
import FavoriteButton from "@/components/FavoriteButton";
import styled from "styled-components";
import Image from "next/image";

export default function Notebook(artworksInfo, onToggleFavorite, artworks) {
  const toggledArtworks = artworksInfo.artworksInfo.filter(
    (artworkInfo) => artworkInfo.isFavorite
  );

  const favoriteArtworks = artworks.items.filter((item) =>
    favoriteArtworksId.includes(item.id)
  );
  console.log("notebook page artowkrs", artworks);
  console.log("notebook page info", artworksInfo);
  return (
    <>
      <h1>notebook</h1>
      <StyledList>
        {favoriteArtworks.artworksInfo.map(
          ({ id, image_thumbnail, titles }) => {
            const titleText = titles[0].title;
            return (
              <StyledListItem key={id}>
                <FavoriteButton
                  onToggleFavorite={onToggleFavorite}
                  id={id}
                  artworksInfo={artworksInfo}
                />
                <Link href={`/artwork-info/${id}`}>
                  <StyledImageList
                    src={image_thumbnail}
                    alt={titleText}
                    width={200}
                    height={200}
                  />
                </Link>
              </StyledListItem>
            );
          }
        )}
      </StyledList>
    </>
  );
}

const StyledList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const StyledImageList = styled(Image)`
  height: 90%;
  width: 90%;
`;

const StyledListItem = styled.li`
  text-align: center;
`;
