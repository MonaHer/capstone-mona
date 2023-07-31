import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Link from "next/link";
import styled from "styled-components";
import { useState } from "react";
import Icon from "@mdi/react";
import { mdiEyeOffOutline } from "@mdi/js";
import { mdiEyeOutline } from "@mdi/js";

export default function MyNotesPage({ notes, artworks }) {
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
      <Header />

      <StyledTitle>My Notes</StyledTitle>

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
      <Navigation />
    </>
  );
}

const StyledTitle = styled.h2`
  border: 1px solid whitesmoke;
  padding: 10px;
  text-align: center;
  margin-left: 5%;
  margin-right: 5%;
`;

const StyledList = styled.ul`
  list-style-type: none;
  margin: 15px;
  padding: 0;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: grey;
  font-size: 18px;
`;

const StyledNoteText = styled.p`
  color: black;
`;

const StyledButton = styled.button`
  margin-top: -15px;
  border: none;
  background-color: transparent;
`;

const StyledButtonWrapper = styled.div`
  display: flex;
`;

const StyledNoteTextWrapper = styled.div`
  margin: 10px auto;
  display: flex;
  flex-direction: column;
  appearance: none;
  width: 100%;
  min-height: 100%;
  border: none;
  font-size: 24px;
  line-height: 37px;
  padding: 10px;
  resize: none;

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
`;

const StyledNoResultsContainer = styled.div`
  text-align: center;
  margin-top: 140px;
  margin-bottom: 80px;
`;
