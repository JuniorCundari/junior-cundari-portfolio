import { useEffect, useRef } from 'react';
import { ThemeProvider } from 'styled-components';

import LocomotiveScroll from 'locomotive-scroll';

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
  const containerRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: containerRef.current,
      smooth: true,
      reloadOnContextChange: true,
      multiplier: 0.75,
      inertia: 0.5,
      tablet: { smooth: true },
      smartphone: { smooth: true },
    });
  }, []);

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />

      <Container
        data-scroll-container
        ref={containerRef}
      >
        <Header />
        <main>
          <Home />
          <About />
          <SectionProjects />
          <Contact />
        </main>
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default App;
