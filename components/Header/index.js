import styled from "styled-components";

export default function Header() {
  return (
    <>
      <StyledHeader />
    </>
  );
}

const StyledHeader = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 30px;
  background-color: black;
`;
