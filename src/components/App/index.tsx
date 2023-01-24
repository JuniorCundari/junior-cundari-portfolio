import { ThemeProvider } from 'styled-components';

import GlobalStyles from '../../assets/styles/global';
import defaultTheme from '../../assets/styles/themes/default';
import About from '../About';
import Contact from '../Contact';
import Footer from '../Footer';

import Header from '../Header';
import Home from '../Home';
import SectionProjects from '../SectionProjects';

import { Container } from './styles';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />

      <Header />

      <Container>
        <Home />
        <About />
        <SectionProjects />
        <Contact />
      </Container>

      <Footer />
    </ThemeProvider>
  );
}

export default App;
