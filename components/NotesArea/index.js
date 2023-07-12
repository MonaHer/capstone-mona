import { useState } from "react";
import styled from "styled-components";

export default function NotesArea({ note, onNoteChange }) {
  const [textAreaValue, setTextAreaValue] = useState("");

  const adjustTextAreaHeight = (event) => {
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
      <StyledTextArea
        name="personal-notes"
        id="personal-notes"
        value={note}
        onChange={(e) => onNoteChange(e.target.value)}
        rows={5}
        onInput={adjustTextAreaHeight}
        onHandleTextAreaValue={handleTextAreaValue}
      />
    </>
  );
}

const StyledTextArea = styled.textarea`
  width: 100%;
  min-height: 100%;
  border: none;
  font-size: 15px;
  line-height: 15px;
  padding: 20px;
  border: 0;
  border-radius: 0;
  background-image: linear-gradient(
    0deg,
    #d6caa3 2.7%,
    #f6f0cf 2.7%,
    #f6f0cf 50%,
    #d6caa3 50%,
    #d6caa3 52.7%,
    #f6f0cf 52.7%,
    #f6f0cf 100%
  );
`;
