import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.9rem 1.6rem;
  gap: 1.6rem;
  margin-right: 3.2rem;

  height: clamp(4rem, 5vw, 4.8rem);

  background: linear-gradient(180deg, #201F24 0%, rgba(32, 31, 36, 0) 100%);
  border-radius: 1.6rem;
  border: 2px solid ${({ theme }) => theme.colors.blue[800]};

  img {
    width: clamp(2.4rem, 5vw, 3.2rem);
    /* height: clamp(2.2rem, 5vw, 3rem); */
  }

  span {
    word-break: keep-all;
    white-space: nowrap;
  }
`;
