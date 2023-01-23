import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    font-size: 62.5%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: ${({ theme }) => theme.colors.white};
  }

  body {
    overflow-x: hidden;
    background: ${({ theme }) => theme.colors.background};
    font-family: 'Ubuntu Mono', sans-serif;
    font-size: 2.4rem;
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
