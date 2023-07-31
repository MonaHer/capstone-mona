import Link from "next/link";
import Image from "next/image";
import { styled } from "styled-components";

export const StyledImage = styled(Image)`
  height: 40%;
  width: 40%;
  @media (max-width: 768px) {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }
`;

export const FullScreenImageContainer = styled.div`
  @media (max-width: 768px) {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    position: relative;
  }
`;

export const TextOverlay = styled.div`
  position: absolute;
  width: 80%;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: whitesmoke;
  font-size: 24px;
  text-align: center;
  border: 1px solid whitesmoke;
`;

export const LoadingAnimationOverlay = styled.div`
  position: absolute;
  width: 10%;
  top: 90%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const StyledLink = styled(Link)`
  color: whitesmoke;
`;

export const StyledLinkOverlay = styled.div`
  position: absolute;
  width: 10%;
  top: 95%;
  left: 49%;
  transform: translate(-50%, -50%);
`;
