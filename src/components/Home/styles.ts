import styled from 'styled-components';

import background from '../../assets/images/img/background.png';

export const Container = styled.section`
  height: 100vh;
  width: 100%;
  margin-top: 20%;
  background-image: url(${background});

  h1 {
    letter-spacing: -0.03em;

    .span-title {
      background: linear-gradient(${({ theme }) => theme.colors.gradient});
      background-clip: text;
      background-size: 400% 400%;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;

      animation: gradient 3s ease infinite;
    }
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    margin-top: 6.4rem;
    padding: 2.4rem 4rem;
    background: ${({ theme }) => theme.colors.blue[800]};
    width: clamp(16.2rem, 49vw, 26.2rem);
    height: clamp(4.4rem, 5vw, 7.2rem);
    border-radius: 1.6rem;

    a {
      text-transform: uppercase;
      font-family: 'Fira Sans';
      white-space: nowrap;
    }
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 2.4rem;

    margin-top: 16.8rem;

    /* .op-class{
      opacity: 0;
    }

    .fadeIn {
      opacity: 1;
      transition: opacity 4s ;
    } */
  }

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;
