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
    </>
  );
}

const StyledList = styled.ul`
  list-style-type: none;
`;
