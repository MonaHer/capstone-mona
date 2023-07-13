import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export default function ArtworksList({ artworks }) {
  return (
    <>
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
    </>
  );
}

const StyledList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const StyledImage = styled(Image)`
  height: 90%;
  width: 90%;
`;

const StyledListItem = styled.li`
  text-align: center;
`;
