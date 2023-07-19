import Link from "next/link";

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
      <ul>
        {notesWithArtworkTitle.map((note) => {
          return (
            <li key={note.artworkID}>
              <Link href={`/artwork-info/${note.artworkID}`}>
                <h2>{note.artworkTitle}</h2>
              </Link>
              <p>{note.text}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}
