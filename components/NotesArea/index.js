import useLocalStorageState from "use-local-storage-state";

export default function NotesArea() {
  const [note, setNote] = useLocalStorageState("");

  function handleNoteChange(newNote) {
    setNote(newNote);
  }

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
