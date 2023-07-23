import Link from "next/link";
import Image from "next/image";
import { styled } from "styled-components";

export default function RandomCover({ artworks }) {
  const filteredRandomArtworks = artworks.items.filter(
    (item) => item.dimensions[0].value > item.dimensions[1].value
  );

  if (filteredRandomArtworks.length === 0) {
    return null;
  }

  const randomArtwork =
    filteredRandomArtworks[
      Math.floor(Math.random() * filteredRandomArtworks.length)
    ];

  return (
    <>
      <FullScreenImageContainer>
        <Link href={`/artwork-info/${randomArtwork.id}`}>
          <StyledImageList
            src={randomArtwork.image_thumbnail}
            alt={randomArtwork.titleText}
            width={200}
            height={200}
          />
        </Link>
      </FullScreenImageContainer>
    </>
  );
}

const StyledImageList = styled(Image)`
  height: 50%;
  width: 50%;
  @media (max-width: 768px) {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

const FullScreenImageContainer = styled.div`
  @media (max-width: 768px) {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }
`;
