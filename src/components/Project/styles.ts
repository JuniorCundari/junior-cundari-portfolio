import styled from 'styled-components';

export const Container = styled.div<{ projectWebSite: string}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: relative;
  margin-top: 8.8rem;
  width: 100%;

  background: linear-gradient(180deg, rgba(32, 31, 36, 0.69) 0%, rgba(48, 46, 55, 0) 100%);
  border: 2px solid ${({ theme }) => theme.colors.blue[800]};
  border-radius: 6rem;

  .project-title {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;

    padding: 0 4rem;
    margin-top: 1.6rem;
    margin-bottom: 2rem;

    span {
      font-size: 4rem;
      letter-spacing: -0.11em;
      color: transparent;
      -webkit-text-stroke: 2px ${({ theme }) => theme.colors.white};
    }
  }

  .wrapper {
    width: clamp(20rem, 70vw, 30rem);
    height: clamp(25rem, 100vw, 35rem);;
    position: relative;

    canvas {
      object-fit: cover;
      position: absolute;
      width: 100% !important;
      height: 100% !important;
      border-radius: 2rem;

      background: linear-gradient(180deg, rgba(32, 31, 36, 0.69) 0%, rgba(48, 46, 55, 0) 100%);
      border: 2px solid ${({ theme }) => theme.colors.blue[800]};
      border-radius: 6rem;
      padding: 1.6rem;
    }

    .banner {
      display: none;
      object-fit: cover;
    }
  }

  .project-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    padding: 0 4rem;
    margin-top: 1.6rem;
    margin-bottom: 2rem;

    span {
      display: block;
      font-family: 'Alice', sans-serif;
    }

    a {
      img {
        width: clamp(2.4rem, 5vw, 3.2rem);
        height: clamp(2.4rem, 5vw, 3.2rem);
      }
    }
  }

  @media only screen and (max-width: 29.375em) {
    width: 100%;

    .project-footer {
      span {
        font-size: 1rem;
      }
    }
  }

  @media only screen and (max-width: 20em) {
    .project-title {
      justify-content: center;

      h3 {
        display: none;
      }
    }

    .project-footer {
      span {
        opacity: ${({ projectWebSite }) => projectWebSite};
      }
    }
  }
`;
