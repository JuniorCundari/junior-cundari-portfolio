import styled from 'styled-components';

// import background from '../../assets/images/img/background.png';

export const Container = styled.section`
  margin-top: 19.8rem;
  /* background-image: url();
  object-fit: cover;
  background-size: cover; */

  h1 {
    font-size: 8rem;
    width: 80%;

    span {
      background: linear-gradient(${({ theme }) => theme.colors.gradient});
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
    }
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    margin-top: 6.4rem;
    background: ${({ theme }) => theme.colors.blue[800]};
    width: 26rem;
    height: 7.2rem;
    border-radius: 2rem;

    a {
      text-transform: uppercase;
      font-family: 'Fira Sans';
      font-size: 2rem;
    }
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 2.4rem;

    margin-top: 16.8rem;
  }
`;
