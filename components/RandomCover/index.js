import {
  StyledImage,
  FullScreenImageContainer,
  TextOverlay,
  StyledLink,
  StyledLinkOverlay,
} from "./styles";

export default function RandomCover({ artworks }) {
  const filteredRandomArtworks = artworks.items.filter(
    (item) =>
      item.dimensions && item.dimensions[0].value > item.dimensions[1].value
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
        <StyledImage
          src={randomArtwork.image_thumbnail}
          alt={randomArtwork.titles[0].title}
          width={200}
          height={200}
        />

        <StyledLinkOverlay>
          <StyledLink href={`/artwork-info/${randomArtwork.id}`}>
            START
          </StyledLink>
        </StyledLinkOverlay>
        <TextOverlay>
          <p>SMK Notes</p>
        </TextOverlay>
      </FullScreenImageContainer>
    </>
  );
}
