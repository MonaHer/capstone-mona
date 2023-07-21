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
  console.log(artworks);
  return (
    <>
      <Link href={`/artwork-info/${randomArtwork.id}`}>
        <StyledImageList
          src={randomArtwork.image_thumbnail}
          alt={randomArtwork.titleText}
          width={200}
          height={200}
        />
      </Link>
    </>
  );
}

const StyledImageList = styled(Image)`
  height: 100%;
  width: 100%;
`;
