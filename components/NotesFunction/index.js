import { useState } from "react";
import Icon from "@mdi/react";
import { mdiEyeOffOutline } from "@mdi/js";
import { mdiEyeOutline } from "@mdi/js";
import {
  StyledList,
  StyledLink,
  StyledNoteText,
  StyledButton,
  StyledButtonWrapper,
  StyledNoteTextWrapper,
} from "./styles";
import StyledNoResultsContainer from "../NoResultsContainer";
import StyledPageTitle from "../StyledTitle";

export default function MyNotesFunction({ notes, artworks }) {
  const [showNoteTextMap, setShowNoteTextMap] = useState({});

  const notesWithArtworkTitle = notes.map((note) => {
    const artwork = artworks.items.find(
      (artwork) => artwork.id === note.artworkID
    );
    const artworkTitle = artwork ? artwork.titles[0].title : "";
    return { ...note, artworkTitle };
  });

  function toggleNoteText(noteID) {
    setShowNoteTextMap((prevMap) => ({
      ...prevMap,
      [noteID]: !prevMap[noteID],
    }));
  }

  return (
    <>
      <StyledPageTitle>My Notes</StyledPageTitle>

      <StyledList>
        {notesWithArtworkTitle.map((note) => {
          return (
            <li key={note.artworkID}>
              {note.text ? (
                <>
                  <StyledNoteTextWrapper>
                    <StyledLink href={`/artwork-info/${note.artworkID}`}>
                      <h2>{note.artworkTitle}</h2>
                    </StyledLink>
                    <StyledButtonWrapper>
                      <StyledButton
                        onClick={() => toggleNoteText(note.artworkID)}
                      >
                        {showNoteTextMap[note.artworkID] ? (
                          <Icon path={mdiEyeOffOutline} size={1} />
                        ) : (
                          <Icon path={mdiEyeOutline} size={1} />
                        )}
                      </StyledButton>
                    </StyledButtonWrapper>
                    {showNoteTextMap[note.artworkID] && (
                      <StyledNoteText>{note.text}</StyledNoteText>
                    )}
                  </StyledNoteTextWrapper>
                </>
              ) : (
                <></>
              )}
            </li>
          );
        })}

        {notesWithArtworkTitle.length === 0 && (
          <StyledNoResultsContainer>
            <p>No notes taken yet.</p>
          </StyledNoResultsContainer>
        )}
      </StyledList>
    </>
  );
}
