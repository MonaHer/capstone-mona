import styled from "styled-components";

export default function NoResultsContainer({ children }) {
  return (
    <>
      <StyledNoResultsContainer>{children}</StyledNoResultsContainer>
    </>
  );
}

const StyledNoResultsContainer = styled.div`
  text-align: center;
  margin-top: 140px;
  margin-bottom: 80px;
`;
