import styled from 'styled-components';

export const Container = styled.li<{ colorSvg: boolean }>`
  a {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2.4rem;

    font-family: 'Fira Sans', sans-serif;
    text-transform: uppercase;
    letter-spacing: 0.5rem;
    transition: all 0.3s ease-in-out;

    &:hover {
      letter-spacing: 0.9rem;
      transition: all 0.2s ease-in-out;
    }

    img {
      filter: ${({ colorSvg }) => (colorSvg ? 'brightness(0) saturate(100%) invert(100%) sepia(29%) saturate(5077%) hue-rotate(178deg) brightness(107%) contrast(109%)' : false)};
      width: clamp(3.2rem, 5vw, 4rem);
      height: clamp(3.2rem, 5vw, 4rem);

      transition: all 0.2s ease-in-out;

      &:hover {
        transform: scale(1.2);
        transition: all 0.2s ease-in-out;
      }
    }
  }
`;
