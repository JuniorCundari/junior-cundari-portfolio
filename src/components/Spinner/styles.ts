import styled from 'styled-components';

export const StyledSpinner = styled.div`
  display: block;
  position: relative;
  height: 1.2rem;
  width: 50%;
  border: 0.1rem solid ${({ theme }) => theme.colors.white};
  border-radius: 1rem;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 0;
    background: linear-gradient(${({ theme }) => theme.colors.gradient});
    animation: 6s animloader ease-in infinite;
  }

  @keyframes animloader {
    to {
      width: 100%;
    }
  }
`;
