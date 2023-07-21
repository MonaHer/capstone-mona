import Image from "next/image";
import styled from "styled-components";
import { useState } from "react";
import Navigation from "../Navigation";
import Icon from "@mdi/react";
import { mdiMapMarkerRadiusOutline } from "@mdi/js";
import { mdiRulerSquare } from "@mdi/js";

export default function ArtworkInfo({ artwork, note, onNoteChange }) {
  const [isLabelTextVisible, setIsLabelTextVisible] = useState(false);

  const toggleLabelText = function () {
    setIsLabelTextVisible(!isLabelTextVisible);
  };
  const {
    id,
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

  const adjustTextAreaHeight = (event) => {
    const textarea = event.target;
    textarea.style.height = "auto";
    textarea.style.height = textarea.scrollHeight + "px";
  };

  return (
    <>
      <ArtworkContainer>
        <StyledImageInfo
          src={image_thumbnail}
          alt={titleText}
          height={200}
          width={200}
        />
        <StyledArtworkTitle>
          {titleText},{formattedProductionDatesNotes}
        </StyledArtworkTitle>
        <p>
          {creator_forename} {creator_surname},{creatorLifeDates}
        </p>
        {dimension1.length > 0 && (
          <p>
            <StyledIcon path={mdiRulerSquare} size={1} />
            {dimension1}x{dimension2}
            cm
          </p>
        )}
        {current_location_name && current_location_name.length > 0 && (
          <p>
            <StyledIcon path={mdiMapMarkerRadiusOutline} size={1} />{" "}
            {current_location_name}
          </p>
        )}
        {labelText.length > 0 && (
          <StyledButton onClick={toggleLabelText}>
            {isLabelTextVisible ? "Hide Text" : "Show Text"}
          </StyledButton>
        )}
        {isLabelTextVisible && labelText.length > 0 && (
          <StyledLabelText>{labelText}</StyledLabelText>
        )}
        <br />
        <br />
        <label htmlFor="personal-notes">My Notes</label>

        <StyledTextArea
          name="personal-notes"
          id="personal-notes"
          value={note ? note.text : ""}
          onChange={(event) => onNoteChange(id, event.target.value)}
          rows={5}
          onInput={adjustTextAreaHeight}
        />
      </ArtworkContainer>
      <Navigation />
    </>
  );
}

const ArtworkContainer = styled.div`
  position: relative;
  margin: 20px;
`;

const StyledImageInfo = styled(Image)`
  height: 100%;
  width: 100%;
`;

const StyledLabelText = styled.p`
  text-align: justify;
  line-height: 20px;
`;

const StyledIcon = styled(Icon)`
  color: whitesmoke;
`;

const StyledArtworkTitle = styled.p`
  font-weight: bold;
`;

const StyledTextArea = styled.textarea`
  appearance: none;
  width: 100%;
  min-height: 100%;
  border: none;
  font-size: 24px;
  line-height: 37px;
  padding: 37px;
  resize: none;
  font-family: inherit;
  border: 0;
  border-radius: 0;
  background-image: linear-gradient(
    0deg,
    #d6caa3 2.7%,
    #f6f0cf 2.7%,
    #f6f0cf 50%,
    #d6caa3 50%,
    #f6f0cf 52.7%,
    #f6f0cf 100%
  );
  background-size: 74px 74px;
  font-family: var(--font);
`;

const StyledButton = styled.button`
  background-color: black;
  color: whitesmoke;
`;
