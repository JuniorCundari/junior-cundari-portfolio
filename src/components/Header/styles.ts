import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 4.8rem auto 0 auto;
  max-width: 105.6rem;
  padding: 0 3.2rem;

  overflow: hidden;

  height: 100%;
  width: 100%;

  .logo {
    width: clamp(6.8rem, 5vw, 10.2rem);
  }
`;
