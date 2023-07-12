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
                <Image
                  src={image_thumbnail}
                  alt={titleText}
                  height={300}
                  width={300}
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
`;
