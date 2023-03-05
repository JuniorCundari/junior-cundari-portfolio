import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;

  padding-top: 12rem;

  .projects-section-title {
    div {
      margin-bottom: 1.6rem;
    }

    p {
      font-family: 'Alice', sans-serif;
    }
  }

  .wrapper-projects {
    /* display: flex;
    flex-direction: column;
    align-items: center; */

    width: 80%;

    @media only screen and (max-width: 43em) {
      width: 100%;
    }
  }
`;
