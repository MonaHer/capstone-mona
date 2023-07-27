import Link from "next/link";
import styled from "styled-components";
import Icon from "@mdi/react";
import { mdiMagnify } from "@mdi/js";
import { mdiNotebookHeartOutline } from "@mdi/js";
import { mdiHomeOutline } from "@mdi/js";
import { mdiCardsHeart } from "@mdi/js";

import { useRouter } from "next/router";

export default function Navigation() {
  const router = useRouter();
  return (
    <>
      <NavBar>
        <StyledNavBarLink href={`/`} active={router.pathname === "/"}>
          <StyledNavBarIcon
            path={mdiHomeOutline}
            size={2}
            active={router.pathname === "/"}
          />
        </StyledNavBarLink>

        <StyledNavBarLink
          href={`/artworks-collection`}
          active={router.pathname === "/artworks-collection"}
        >
          <StyledNavBarIcon
            path={mdiMagnify}
            size={2}
            active={router.pathname === "/artworks-collection"}
          />
        </StyledNavBarLink>
        <StyledNavBarLink
          href={`/favorites`}
          active={router.pathname === "/favorites"}
        >
          <StyledNavBarIcon
            path={mdiCardsHeart}
            size={2}
            active={router.pathname === "/favorites"}
          />
        </StyledNavBarLink>
        <StyledNavBarLink
          href={`/my-notes`}
          active={router.pathname === "/my-notes"}
        >
          <StyledNavBarIcon
            path={mdiNotebookHeartOutline}
            size={2}
            active={router.pathname === "/my-notes"}
          />
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
  width: 25%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledNavBarIcon = styled(Icon)`
  color: ${({ active }) => (active ? "hotpink" : "whitesmoke")};
`;
