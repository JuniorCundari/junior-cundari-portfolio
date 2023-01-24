import styled from 'styled-components';

export const Container = styled.section`
  position: relative;
  margin-top: 8.8rem;

  .disp {
    width: 30rem;
    height: 35rem;
    position: relative;
    border-radius: 2rem;
    overflow: hidden;

    canvas {
      object-fit: cover;
      position: absolute;
      z-index: 10;
      width: 100% !important;
      height: 100% !important;
    }

    .banner {
      display: none;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;

      &:hover {
        &:nth-child(2) {
          opacity: 1;
        }
      }

      &:nth-child(1) {
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0;
        transition: opacity 0.3s;
      }
      &:nth-child(2) {
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0;
        transition: opacity 0.3s;
      }
    }
  }

  .project-infos {
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    position: absolute;
    left: 18%;
    bottom: 25%;
    z-index: 20;

    mix-blend-mode: difference;
    transform: translateX(-2rem);
    opacity: 0;
    will-change: transform, opacity;
    transition: 1.3s var(--cubicbz);

    &:hover {
      transform: translateX(0);
      opacity: 1;
    }

    @media only screen and (max-width: 65.625em) {
      top: 95%;
      left: 15.6%;
      width: clamp(32rem, 5vw, 58.6rem);
    }

    @media only screen and (max-width: 24.375em) {
      top: 95%;
      left: 45.5%;
    }

    .project-title {
      div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 1.6rem;

        .project-number {
          font-size: 2rem;
          font-family: 'Fira Sans', sans-serif;
          letter-spacing: -0.15rem;
        }
      }

      p {
        font-family: 'Alice', sans-serif;
      }
    }

    .project-infos-footer {
      display: flex;
      align-items: center;
      justify-content: space-between;

      span {
        display: block;
        font-family: 'Alice', sans-serif;
        font-size: 1.6rem;
      }

      .project-social {
        display: flex;
        align-items: center;
        gap: 1.6rem;

        a {
          img {
            width: clamp(2.4rem, 5vw, 3.2rem);
            height: clamp(2.4rem, 5vw, 3.2rem);
          }
        }
      }
    }
  }
`;
