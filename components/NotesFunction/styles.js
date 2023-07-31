import styled from "styled-components";
import Link from "next/link";

export const StyledList = styled.ul`
  list-style-type: none;
  margin: 15px;
  padding: 0;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: grey;
  font-size: 18px;
`;

export const StyledNoteText = styled.p`
  color: black;
`;

export const StyledButton = styled.button`
  margin-top: -15px;
  border: none;
  background-color: transparent;
`;

export const StyledButtonWrapper = styled.div`
  display: flex;
`;

export const StyledNoteTextWrapper = styled.div`
  margin: 10px auto;
  display: flex;
  flex-direction: column;
  appearance: none;
  width: 95%;
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
