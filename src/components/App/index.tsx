import { ThemeProvider } from 'styled-components';

import GlobalStyles from '../../assets/styles/global';
import defaultTheme from '../../assets/styles/themes/default';
import About from '../About';

import Header from '../Header';
import Home from '../Home';

import { Container } from './styles';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />

      <Header />
      <Container>
        <Home />
        <About />
      </Container>
    </ThemeProvider>
  );
}

export default App;
