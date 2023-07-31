import { useState } from "react";
import Navigation from "../Navigation";
import Header from "../Header";
import { mdiMapMarkerRadiusOutline } from "@mdi/js";
import { mdiRulerSquare } from "@mdi/js";
import FavoriteButton from "../FavoriteButton";

import {
  StyledLabelText,
  StyledIcon,
  StyledArtworkTitle,
  StyledTextArea,
  StyledButton,
  ArtworkContainer,
  StyledImageInfo,
  BoldText,
} from "./styles";

export default function ArtworkInfo({
  artwork,
  note,
  onNoteChange,
  onToggleFavorite,
  favorite,
}) {
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
      <Header />
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
        <FavoriteButton
          onClick={() => onToggleFavorite(id)}
          isFavored={favorite !== undefined}
        />
        <br />
        <br />
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
        <label htmlFor="personal-notes" style={{ fontSize: "19px" }}>
          <BoldText>My Notes</BoldText>
        </label>

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
