import Link from "next/link";
import Image from "next/image";
import { styled } from "styled-components";
import { useRouter } from "next/router";

export default function RandomCover({ artworks }) {
  const router = useRouter();
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

  function redirect() {
    router.push(`/artworks-collection`);
  }
  setTimeout(redirect, 5000);

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
            <p>SMK Notes</p>
          </TextOverlay>
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
  width: 80%;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: whitesmoke;
  font-size: 24px;
  text-align: center;
  border: 1px solid whitesmoke;
`;
