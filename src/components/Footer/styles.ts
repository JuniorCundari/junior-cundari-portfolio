import styled from 'styled-components';

export const Container = styled.footer`
  margin: 0 auto;
  max-width: 105.6rem;
  padding: 0 3.2rem;

  height: 15rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

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

export const StyledBorderTop = styled.div`
  width: 100%;
  height: 0.2rem;
  background-image: linear-gradient(${({ theme }) => theme.colors.gradient});
`;
