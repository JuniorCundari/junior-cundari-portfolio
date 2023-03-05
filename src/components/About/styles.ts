import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding-top: 12rem;

  .text-about {
    margin-bottom: 5.6rem;

    p {
      font-family: 'Alice';
    }
  }

  .languages-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2.4rem;

    width: 100vw;
    margin-top: 5.6rem;
  }
`;
