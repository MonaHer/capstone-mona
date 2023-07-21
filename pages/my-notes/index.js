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
    </>
  );
}

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
