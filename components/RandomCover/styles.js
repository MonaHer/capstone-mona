import Link from "next/link";
import Image from "next/image";
import { styled } from "styled-components";

export const StyledImage = styled(Image)`
  @media (min-width: 769px) {
    height: 40%;
    width: 40%;
    margin: auto;
    display: block;
    margin-top: 7%;
  }

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
  @media (min-width: 769px) {
    position: absolute;
    width: 40%;
    top: 60vh;
    left: 50%;
    transform: translateX(-50%);
    color: whitesmoke;
    font-size: 30px;
    text-align: center;
    border: 2px solid whitesmoke;
  }

  @media (max-width: 768px) {
    position: absolute;
    width: 80%;
    top: 75vh;
    left: 50%;
    transform: translateX(-50%);
    color: whitesmoke;
    font-size: 24px;
    text-align: center;
    border: 1px solid whitesmoke;
  }
`;

export const StyledLink = styled(Link)`
  @media (min-width: 769px) {
    color: whitesmoke;
    font-size: 25px;
  }

  @media (max-width: 768px) {
    color: whitesmoke;
  }
`;

export const StyledLinkOverlay = styled.div`
  position: absolute;
  width: 100%;
  bottom: 5vh;
  left: 0;
  text-align: center;

  @media (min-width: 769px) {
    position: static;
    display: flex;
    justify-content: center;
    bottom: 9vh;
  }
`;
