import Image from "next/image";
import styled from "styled-components";
import { useState } from "react";

export default function ArtworkInfo({ artwork }) {
  const [isLabelTextVisible, setIsLabelTextVisible] = useState(false);

  const toggleLabelText = function () {
    setIsLabelTextVisible(!isLabelTextVisible);
  };
  const {
    image_thumbnail,
    production,
    dimensions,
    titles,
    current_location_name,
    labels,
    production_dates_notes,
  } = artwork;

  const {
    creator_forename,
    creator_surname,
    creator_date_of_birth,
    creator_date_of_death,
  } = production[0];

  const creatorLifeDates = `${creator_date_of_birth.slice(
    0,
    4
  )}-${creator_date_of_death.slice(0, 4)}`;

  const dimension1 = dimensions[0].value;
  const dimension2 = dimensions[1].value;

  const titleText = titles[0].title;
  const labelText = labels && labels[0] && labels[0].text ? labels[0].text : "";

  const productionDatesNotes = production_dates_notes[0];
  const prefix = "Værkdatering: ";
  const formattedProductionDatesNotes = productionDatesNotes.startsWith(prefix)
    ? productionDatesNotes.slice(prefix.length)
    : productionDatesNotes;

  return (
    <ArtworkContainer>
      <StyledImage
        src={image_thumbnail}
        alt={titleText}
        height={200}
        width={200}
      />
      <p>
        Title: {titleText},{formattedProductionDatesNotes}
      </p>
      <p>
        Creator: {creator_forename} {creator_surname},{creatorLifeDates}
      </p>
      <p>
        Dimensions:
        {dimension1}x{dimension2}
        cm
      </p>
      <p>Location: {current_location_name}</p>
      {labelText.length > 0 && (
        <button onClick={toggleLabelText}>Show Text</button>
      )}
      {isLabelTextVisible && labelText.length > 0 && (
        <StyledLabelText>{labelText}</StyledLabelText>
      )}
    </ArtworkContainer>
  );
}

const ArtworkContainer = styled.div`
  position: relative;
  margin: 20px;
`;

const StyledImage = styled(Image)`
  height: 100%;
  width: 100%;
`;

const StyledLabelText = styled.p`
  text-align: justify;
  line-height: 20px;
`;
