import { mdiMagnify } from "@mdi/js";
import { mdiNotebookHeartOutline } from "@mdi/js";
import { mdiCardsHeart } from "@mdi/js";
import { mdiShimmer } from "@mdi/js";
import { useRouter } from "next/router";
import { StyledNavBar, StyledNavBarLink, StyledNavBarIcon } from "./styles";

export default function Navigation() {
  const router = useRouter();
  return (
    <>
      <StyledNavBar>
        <StyledNavBarLink href={`/`}>
          <StyledNavBarIcon
            path={mdiShimmer}
            size={2}
            $isActive={router.pathname === "/"}
          />
        </StyledNavBarLink>

        <StyledNavBarLink href={`/artworks-collection`}>
          <StyledNavBarIcon
            path={mdiMagnify}
            size={2}
            $isActive={router.pathname === "/artworks-collection"}
          />
        </StyledNavBarLink>

        <StyledNavBarLink href={`/my-notes`}>
          <StyledNavBarIcon
            path={mdiNotebookHeartOutline}
            size={2}
            $isActive={router.pathname === "/my-notes"}
          />
        </StyledNavBarLink>
        <StyledNavBarLink href={`/favorites`}>
          <StyledNavBarIcon
            path={mdiCardsHeart}
            size={2}
            $isActive={router.pathname === "/favorites"}
          />
        </StyledNavBarLink>
      </StyledNavBar>
    </>
  );
}
