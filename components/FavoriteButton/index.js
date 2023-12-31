import Icon from "@mdi/react";
import { mdiHeartOutline } from "@mdi/js";
import { mdiCardsHeart } from "@mdi/js";
import { StyledButton } from "./styles";

export default function FavoriteButton({ isFavored, onClick }) {
  return (
    <>
      <StyledButton type="button" onClick={onClick}>
        {isFavored ? (
          <Icon path={mdiCardsHeart} size={1.2} color="hotpink" />
        ) : (
          <Icon path={mdiHeartOutline} size={1.2} color="hotpink" />
        )}
      </StyledButton>
    </>
  );
}
