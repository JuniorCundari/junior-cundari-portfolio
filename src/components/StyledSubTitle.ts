import styled from 'styled-components';

export default styled.div`
  font-weight: 700;
  font-size: 4.8rem;
  text-transform: lowercase;

  background: linear-gradient(${({ theme }) => theme.colors.gradient});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;
