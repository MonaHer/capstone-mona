import Icon from "@mdi/react";
import { mdiHeartOutline } from "@mdi/js";
import { mdiCardsHeart } from "@mdi/js";
import { styled } from "styled-components";

export default function FavoriteButton({ isFavored, onClick }) {
  return (
    <>
      <StyledButton type="button" onClick={onClick}>
        {isFavored ? (
          <Icon path={mdiCardsHeart} size={1} color="hotpink" />
        ) : (
          <Icon path={mdiHeartOutline} size={1} color="hotpink" />
        )}
      </StyledButton>
    </>
  );
}

const StyledButton = styled.button`
  border: none;
  background-color: transparent;
  position: relative;
  /* top: 40px;
  left: 335px; */
`;
