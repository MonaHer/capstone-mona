import styled from "styled-components";
import Image from "next/image";

export const StyledListItem = styled.li`
  text-align: center;
`;

export const StyledList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const StyledImage = styled(Image)`
  height: 40%;
  width: 40%;
  @media (max-width: 768px) {
    height: 85%;
    width: 85%;
  }
`;
