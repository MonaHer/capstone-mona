import Link from "next/link";
import styled from "styled-components";

export default function MyNotesPage({ notes, artworks }) {
  const notesWithArtworkTitle = notes.map((note) => {
    const artwork = artworks.items.find(
      (artwork) => artwork.id === note.artworkID
    );
    const artworkTitle = artwork ? artwork.titles[0].title : "";
    return { ...note, artworkTitle };
  });

  return (
    <>
      <StyledNotesSection>
        <StyledList>
          {notesWithArtworkTitle.map((note) => {
            return (
              <li key={note.artworkID}>
                {note.text ? (
                  <>
                    <StyledLink href={`/artwork-info/${note.artworkID}`}>
                      <h2>{note.artworkTitle}</h2>
                    </StyledLink>
                    <StyledNoteTextWrapper>
                      <StyledNoteText>{note.text}</StyledNoteText>
                    </StyledNoteTextWrapper>
                  </>
                ) : (
                  <></>
                )}
              </li>
            );
          })}
        </StyledList>
      </StyledNotesSection>
    </>
  );
}

const StyledList = styled.ul`
  list-style-type: none;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: grey;
  font-size: 24px;
`;

const StyledNoteText = styled.p`
  color: black;
`;

const StyledNoteTextWrapper = styled.div`
  overflow-wrap: break-word;
`;

const StyledNotesSection = styled.div`
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
