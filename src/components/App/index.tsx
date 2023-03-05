import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from '../../assets/styles/global';
import defaultTheme from '../../assets/styles/themes/default';

import About from '../About';
import Contact from '../Contact';
import Footer from '../Footer';

import Header from '../Header';
import Home from '../Home';
import Loader from '../Loader';
import SectionProjects from '../SectionProjects';

import { Container } from './styles';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />

      {isLoading ? (
        <Loader isLoading={isLoading} />
      ) : (
        <>
          <Header />
          <Container>
            <Home />
            <About />
            <SectionProjects />
            <Contact />
          </Container>
          <Footer />
        </>
      )}

    </ThemeProvider>
  );
}

export default App;
