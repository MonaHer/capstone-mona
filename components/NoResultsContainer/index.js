import styled from "styled-components";

export default function NoResultsContainer() {
  return (
    <>
      <StyledNoResultsContainer>{children}</StyledNoResultsContainer>
    </>
  );
}

export const StyledNoResultsContainer = styled.div`
  text-align: center;
  margin-top: 140px;
  margin-bottom: 80px;
`;
