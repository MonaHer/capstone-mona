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
            <li key={id}>
              <Link href={`/artwork-info/${id}`}>
                <StyledImage
                  src={image_thumbnail}
                  alt={titleText}
                  width={200}
                  height={200}
                />
              </Link>
            </li>
          );
        })}
      </StyledList>
    </>
  );
}

const StyledList = styled.ul`
  list-style-type: none;
  margin: 20px;
`;

const StyledImage = styled(Image)`
  height: 100%;
  width: 100%;
`;
