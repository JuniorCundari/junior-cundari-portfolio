import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding-top: 10.2rem;

  .text-about {
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

    .languages-box {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 3.2rem;
    }
  }
`;
