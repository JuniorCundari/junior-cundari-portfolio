import styled from 'styled-components';

export const Container = styled.section`
  margin-top: 18.8rem;
  margin-bottom: 29.4rem;

  @media only screen and (max-width: 24.375em) {
    margin-top: 120%;
  }

  p {
    margin-top: 1.6rem;
  }

  .contact-social {
    margin-top: 24.2rem;

    ul {
      margin-top: 2.4rem;
      display: flex;
      gap: 1.6rem;
    }
  }
`;
