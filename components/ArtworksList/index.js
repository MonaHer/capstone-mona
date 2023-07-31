import Link from "next/link";
import { StyledList, StyledImage, StyledListItem } from "../StyledImageList";

export default function ArtworksList({ artworks }) {
  return (
    <StyledList>
      {artworks.items.map(({ id, image_thumbnail, titles }) => {
        const titleText = titles[0].title;
        return (
          <StyledListItem key={id}>
            <Link href={`/artwork-info/${id}`}>
              <StyledImage
                src={image_thumbnail}
                alt={titleText}
                width={200}
                height={200}
              />
            </Link>
          </StyledListItem>
        );
      })}
    </StyledList>
  );
}
