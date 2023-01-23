import styled from 'styled-components';

export const Container = styled.li`
  a {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2.4rem;

    font-family: 'Fira Sans', sans-serif;
    text-transform: uppercase;
    letter-spacing: 0.5rem;
    transition: all 0.3s ease-in-out;

    &:hover {
      letter-spacing: 0.9rem;
      transition: all 0.2s ease-in-out;
    }
  }
`;
