import styled from "styled-components";
import Image from "next/image";
import Icon from "@mdi/react";

export const StyledList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const StyledImage = styled(Image)`
  height: 90%;
  width: 90%;
`;

export const StyledListItem = styled.li`
  text-align: center;
`;

export const StyledSearchInput = styled.input`
  position: absolute;
  background-color: transparent;
  position: fixed;
  top: 20px;
  left: 20px;
  right: 20px;
  width: 80%;
  height: 40px;
  color: whitesmoke;
  border: none;
  padding: 10px;
  margin: 20px auto;

  &::placeholder {
    color: whitesmoke;
  }

  &:focus {
    outline: 2px solid hotpink;
  }
`;

export const StyledMagnifyIcon = styled(Icon)`
  position: relative;
  position: fixed;
  left: 1580px;
  top: 41px;
  @media (max-width: 768px) {
    position: relative;
    position: fixed;
    left: 300px;
    top: 43px;
  }
`;

export const StyledEndofSearchContainer = styled.div`
  text-align: center;
`;
