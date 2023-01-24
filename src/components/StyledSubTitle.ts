import styled from 'styled-components';

export default styled.div`
  font-weight: 700;
  font-size: 4.8rem;
  text-transform: lowercase;

  background: linear-gradient(${({ theme }) => theme.colors.gradient});
  background-clip: text;
  background-size: 400% 400%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  animation: gradient 3s ease infinite;

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;
