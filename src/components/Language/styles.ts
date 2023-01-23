import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.9rem 1.6rem;
  gap: 1.6rem;

  background: ${({ theme }) => theme.colors.blue[800]};
  border-radius: 2rem;

  span {
    word-break: keep-all;
  }
`;
