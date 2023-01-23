import styled from 'styled-components';

export default styled.h2`
  font-weight: 700;
  font-size: 4.8rem;
  text-transform: lowercase;
  padding-bottom: 3.2rem;

  background: linear-gradient(${({ theme }) => theme.colors.gradient});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;
