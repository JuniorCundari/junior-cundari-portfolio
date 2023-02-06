import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;

  margin-top: 11.2rem;

  .projects-section-title {
    div {
      margin-bottom: 1.6rem;
    }

    p {
      font-family: 'Alice', sans-serif;
    }
  }

  .wrapper-projects {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
  }
`;
