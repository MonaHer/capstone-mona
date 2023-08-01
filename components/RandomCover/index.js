import {
  StyledImage,
  FullScreenImageContainer,
  TextOverlay,
  StyledLink,
  StyledLinkOverlay,
} from "./styles";

export default function RandomCover({ artworks }) {
  const filteredRandomArtworks = artworks.items.filter((item) => {
    const hasDimensions = item.dimensions && item.dimensions.length >= 2;
    const hasProductionDatesNotes =
      item.production_dates_notes && item.production_dates_notes.length >= 1;
    const hasCreator =
      item.production &&
      item.production[0] &&
      item.production[0].creator_forename &&
      item.production[0].creator_surname &&
      item.production[0].creator_date_of_birth &&
      item.production[0].creator_date_of_death;

    return hasDimensions && hasProductionDatesNotes && hasCreator;
  });

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
