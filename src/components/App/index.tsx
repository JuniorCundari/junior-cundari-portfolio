import { ThemeProvider } from 'styled-components';

import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import { useRef } from 'react';
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

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />

      <LocomotiveScrollProvider
        options={{
          smooth: true,
          reloadOnContextChange: true,
          multiplier: 0.75,
          inertia: 0.5,
        }}
        watch={[]}
        containerRef={containerRef}
      >
        <Container data-scroll-container ref={containerRef}>
          <Header />
          <main>
            <Home />
            <About />
            <SectionProjects />
            <Contact />
          </main>
          <Footer />
        </Container>
      </LocomotiveScrollProvider>
    </ThemeProvider>
  );
}

export default App;
