import styled from 'styled-components';

export const Container = styled.footer`
  padding: 0 3.2rem;

  height: 10rem;
  width: 100vw;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border-top: 0.1rem solid;
  border-image: linear-gradient(${({ theme }) => theme.colors.gradient}) 1 0 0 0;

  img {
    width: clamp(6.8rem, 2vw, 10.2rem);
  }

  ul {
    display: flex;
    gap: 1.6rem;

    li {
      img {
        width: clamp(1.6rem, 5vw, 2.5rem);
        height: clamp(1.6rem, 5vw, 2.5rem);
      }
    }
  }
`;
