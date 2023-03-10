import styled from 'styled-components';

export const StyledMenu = styled.nav<{open: boolean}>`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 20%;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;

  background: ${({ theme }) => theme.colors.blue[800]};

  height: 100vh;
  width: 100vw;

  padding-top: 15%;

  transition: transform 0.9s ease-in-out;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};

  @media only screen and (max-width: 56.25em) {
    flex-direction: column;
    align-items: center;
    gap: 10%;
  }

  .navigation-list {
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
    width: 22%;

    animation: ${({ open }) => (open ? 'scale-up-center 1s 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) both' : null)};

    .nav-social-list {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      gap: 2.4rem;
    }

    .nav-menu-list {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      gap: 2.4rem;

      li {
        a {
          font-weight: bold;
          font-family: 'Fira Sans', sans-serif;

          letter-spacing: 0.5rem;
          text-transform: uppercase;
          transition: all 0.3s ease-in-out;

          &:hover {
            letter-spacing: 0.9rem;
            transition: all 0.2s ease-in-out;
          }
        }
      }
    }

    @media only screen and (max-width: 56.25em) {
      width: 60%;
    }

    @keyframes scale-up-center {
      0% {
        transform: scale(0);
      }
      100% {
        transform: scale(1);
      }
    }
  }
`;
