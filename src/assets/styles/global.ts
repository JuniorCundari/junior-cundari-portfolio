import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    font-size: 62.5%;
    --cubicbz: cubic-bezier(0.9, 0, 0.1, 1);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: ${({ theme }) => theme.colors.white};
  }

  h1,
  h2,
  h3,
  span,
  .span-title,
  a,
  p {
    font-size: clamp(var(--min), var(--val), var(--max));
  }

  h1, .span-title {
    --min: 4rem;
    --val: 5vw;
    --max: 8rem;
  }

  h2 {
    --min: 2.4rem;
    --val: 4vw;
    --max: 4rem;
  }

  h3 {
    --min: 2.4rem;
    --val: 3vw;
    --max: 3.2rem;
  }

  a {
    --min: 1.2rem;
    --val: 1.2vw;
    --max: 2rem;
  }

  span, p {
    --min: 1.6rem;
    --val: 2vw;
    --max: 2rem;
  }

  html {
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    scroll-behavior: smooth;

    &::-webkit-scrollbar {
      width: 1rem;
      padding: 0 0.1rem;
    }

    /* Track */
    &::-webkit-scrollbar-track {
      background: rgba(212, 212, 212, 0.2);
    }

    /* Handle */
    &::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.colors.blue[800]};
      border-radius: 3px;
    }

    /* Handle on hover */
    &::-webkit-scrollbar-thumb:hover {
      background: rgb(110, 110, 110);
    }
  }

  body {
    overflow-x: hidden;
    background: ${({ theme }) => theme.colors.background};
    font-family: 'Ubuntu Mono', sans-serif;
    font-size: 1.6rem;
    line-height: 1.6;
    position: relative;
    width: 100vw;
    height: 100vh;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }

  li {
    list-style: none;
  }
`;
