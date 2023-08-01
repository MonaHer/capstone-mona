import Link from "next/link";
import styled from "styled-components";
import Icon from "@mdi/react";

export const StyledNavBar = styled.div`
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 60px;
  background-color: black;
`;

export const StyledNavBarLink = styled(Link)`
  width: 25%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledNavBarIcon = styled(Icon)`
  color: ${({ $isActive }) => ($isActive ? "hotpink" : "whitesmoke")};

  &:hover {
    color: pink;
  }
`;
