import styled from 'styled-components';

export const Container = styled.footer`
  /* margin: 0 auto;
  max-width: 105.6rem; */
  padding: 0 3.2rem;

  height: 15rem;
  width: 100vw;

  display: flex;
  align-items: center;
  justify-content: space-around;

  border-top: 0.1rem solid;
  border-image: linear-gradient(${({ theme }) => theme.colors.gradient}) 1 0 0 0;

  img {
    width: clamp(6.8rem, 2vw, 10.2rem);
    height: clamp(2.4rem, 2vw, 3.6rem);
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
