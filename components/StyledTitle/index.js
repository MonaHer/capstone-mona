import { styled } from "styled-components";

export default function StyledPageTitle({ children }) {
  return <StyledTitle>{children}</StyledTitle>;
}

const StyledTitle = styled.h2`
  border: 1px solid whitesmoke;
  padding: 10px;
  text-align: center;
  margin-left: 5%;
  margin-right: 5%;
`;
