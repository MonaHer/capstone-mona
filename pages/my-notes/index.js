export default function MyNotesPage({ artworks, notes }) {
  return (
    <>
      <h1>my notes</h1>
      <ul>
        {notes.map(({ id, note }) => {
          return <li key={id}>{note}</li>;
        })}
      </ul>
    </>
  );
}
