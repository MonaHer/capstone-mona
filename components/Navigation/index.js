import Link from "next/link";
import styled from "styled-components";
import Icon from "@mdi/react";
import { mdiMagnify } from "@mdi/js";
import { mdiNotebookHeartOutline } from "@mdi/js";
import { mdiFormatListBulleted } from "@mdi/js";

export default function Navigation() {
  return (
    <>
      <NavBar>
        <StyledNavBarLink href={`/`}>
          <StyledNavBarIcon path={mdiFormatListBulleted} size={2} />
        </StyledNavBarLink>
        <StyledNavBarLink href={`/search`}>
          <StyledNavBarIcon path={mdiMagnify} size={2} />
        </StyledNavBarLink>
        <StyledNavBarLink href={`/my-notes`}>
          <StyledNavBarIcon path={mdiNotebookHeartOutline} size={2} />
        </StyledNavBarLink>
      </NavBar>
    </>
  );
}

const NavBar = styled.div`
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 60px;
  background-color: black;
`;

const StyledNavBarLink = styled(Link)`
  width: 33.3%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledNavBarIcon = styled(Icon)`
  color: whitesmoke;
`;
