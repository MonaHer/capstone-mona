export default function NotesArea({ note, onNoteChange }) {
  return (
    <>
      <label for="personal-notes">My Notes</label>
      <textarea
        name="personal-notes"
        id="personal-notes"
        value={note}
        onChange={(e) => onNoteChange(e.target.value)}
        rows={10}
      />
    </>
  );
}

// const [rows, setRows] = useLocalStorageState(10);
//   const textareaLineHeight = 24;
//   const previousRows = e.target.rows;
//   e.target.rows = 1;
//   const currentRows = Math.ceil(e.target.scrollHeight / textareaLineHeight);
//   e.target.rows = previousRows;
// if (currentRows !== previousRows) {
//   setRows(currentRows);
// }
