/* eslint-disable no-new */
import { useEffect } from 'react';
import HoverEffect from 'hover-effect';
import StyledSubTitle from '../StyledSubTitle';

import bannerEmpireBurger from '../../assets/images/img/banner-empire-burger.webp';
import bannerEmpireBurger2 from '../../assets/images/img/banner-empire-burger-2.webp';
import displacement from '../../assets/images/img/displacement.webp';

import logoGitHub2 from '../../assets/images/svg/social/logo-github2.svg';
import openSite from '../../assets/images/svg/icons/open.svg';

import { Container } from './styles';

export default function Project() {
  useEffect(() => {
    Array.from(document.querySelectorAll('.wrapper')).forEach((element: any) => {
      const imgs: any = Array.from(element.querySelectorAll('img'));
      new HoverEffect({
        parent: element,
        intensity: 0.5,
        image1: imgs[0].getAttribute('src'),
        image2: imgs[1].getAttribute('src'),
        displacementImage: element.dataset.displacement,
      });
    });
  }, []);

  return (
    <Container>
      <div className="project-title">
        <span className="project-number">01.</span>
        <h3>Empire Burger</h3>
      </div>

      <div
        className="wrapper"
        data-displacement={displacement}
      >
        <img
          src={bannerEmpireBurger}
          alt="Banner Empire Burger"
          className="banner"
        />
        <img
          src={bannerEmpireBurger2}
          alt="Banner Empire Burger"
          className="banner"
        />
      </div>

      <div className="project-footer">
        <a href="https://github.com/JuniorCundari" target="_blank" rel="noreferrer">
          <img src={logoGitHub2} alt="Logo github" />
        </a>
        <span>
          TypeScript, ReactJS, Styled Components
        </span>
        <a href="#sdasd">
          <img src={openSite} alt="Ícone para abrir site do projeto" />
        </a>
      </div>
    </Container>
  );
}
