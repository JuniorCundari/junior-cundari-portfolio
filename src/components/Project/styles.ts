import styled from 'styled-components';

export const Container = styled.section`
  position: relative;
  margin-top: 8.8rem;

  .banner {
    width: 30rem;
    height: 38rem;
    border-radius: 2rem;
    object-fit: cover;
  }

  .project-infos {
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    position: absolute;
    z-index: -1;
    top: 20%;
    left: 59%;
    transform: translateX(-50%);

    padding: 0 4rem;

    width: 58.6rem;
    height: 24rem;
    background: ${({ theme }) => theme.colors.blue[800]};
    border-radius: 2rem;

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
      }
    }
  }
`;
