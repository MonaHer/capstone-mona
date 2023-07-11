import { useState } from "react";

export default function NotesArea({ note, onNoteChange }) {
  const [textAreaValue, setTextAreaValue] = useState("");

  const adjustTextareaHeight = (event) => {
    const textarea = event.target;
    textarea.style.height = "auto";
    textarea.style.height = textarea.scrollHeight + "px";
  };

  const handleTextAreaValue = (event) => {
    setTextAreaValue(event.target.value);
  };

  return (
    <>
      <label for="personal-notes">My Notes</label>
      <textarea
        name="personal-notes"
        id="personal-notes"
        value={note}
        onChange={(e) => onNoteChange(e.target.value)}
        rows={10}
        onInput={adjustTextareaHeight}
        onHandleTextAreaValue={handleTextAreaValue}
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

//
