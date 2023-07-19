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
        <Link href="/">Back to Home</Link>
        <StyledList>
          {notesWithArtworkTitle.map((note) => {
            return (
              <li key={note.artworkID}>
                {note.text ? (
                  <>
                    <Link href={`/artwork-info/${note.artworkID}`}>
                      <h2>{note.artworkTitle}</h2>
                    </Link>
                    <p>{note.text}</p>
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

const StyledNotesSection = styled.div`
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
