import { styled } from "styled-components";
import Icon from "@mdi/react";

export const StyledLabelText = styled.p`
  text-align: justify;
  line-height: 20px;
`;

export const StyledIcon = styled(Icon)`
  color: whitesmoke;
`;

export const StyledArtworkTitle = styled.p`
  font-weight: bold;
`;

export const StyledTextArea = styled.textarea`
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

export const StyledTextButton = styled.button`
  background-color: black;
  color: whitesmoke;
  border-color: pink;
`;

export const ArtworkContainer = styled.div`
  position: relative;
  margin: 20px;
`;

export const BoldText = styled.p`
  font-weight: bold;
  font-family: "Arial", sans-serif;
  font-size: 24px;
`;
