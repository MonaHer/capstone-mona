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
      <Link href={`/artwork-info/${randomArtwork.id}`}>
        <FullScreenImageContainer>
          <StyledImage
            src={randomArtwork.image_thumbnail}
            alt={randomArtwork.titleText}
            width={200}
            height={200}
          />

          <TextOverlay>
            <p>
              Welcome to SMK Notes, your digital notebook for a long lasting
              museums experience
            </p>
          </TextOverlay>
          <Link href={`/artworks-collection`}>Get started</Link>
        </FullScreenImageContainer>
      </Link>
    </>
  );
}

const StyledImage = styled(Image)`
  height: 50%;
  width: 50%;
  @media (max-width: 768px) {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }
`;

const FullScreenImageContainer = styled.div`
  @media (max-width: 768px) {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    position: relative;
  }
`;

const TextOverlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: whitesmoke;
  font-size: 24px;
  text-align: center;
  border-color: whitesmoke;
  border: solid;
`;
