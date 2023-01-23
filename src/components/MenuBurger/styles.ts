import styled from 'styled-components';

export const StyledBurger = styled.button<{ open: boolean }>`
  position: fixed;
  top: 4.8rem;
  right: 25%;
  z-index: 10;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  width: 4.8rem;
  height: 4.8rem;
  border-radius: 50%;
  border: none;
  background: transparent;
  padding-left: 01rem;
  background: ${({ theme }) => theme.colors.background};

  &:focus {
    outline: none;
  }

  div {
    transition: all 0.4s linear;
    transform-origin: -1rem;

    &:nth-child(1) {
      width: 40%;
      height: 0.2rem;
      border-radius: 0.3rem;
      background: ${({ theme }) => theme.colors.blue[500]};

      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    &:nth-child(2) {
      width: 80%;
      height: 0.2rem;
      border-radius: 0.3rem;
      background: ${({ theme }) => theme.colors.green};

      transform: ${({ open }) => (open ? 'translateX(5rem)' : 'translateX(0)')};
      opacity: ${({ open }) => (open ? '0' : '1')};
    }

    &:nth-child(3) {
      width: 40%;
      height: 0.2rem;
      border-radius: 0.3rem;
      background: ${({ theme }) => theme.colors.purple};

      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;
