import StyledSubTitle from '../StyledSubTitle';

import bannerEmpireBurger from '../../assets/images/img/banner-empire-burger.webp';
import logoGitHub2 from '../../assets/images/svg/social/logo-github2.svg';
import openSite from '../../assets/images/svg/icons/open.svg';

import { Container } from './styles';

export default function Project() {
  return (
    <Container>
      <img
        src={bannerEmpireBurger}
        alt="Banner Empire Burger"
        className="banner"
      />

      <div className="project-infos">
        <div className="project-title">
          <StyledSubTitle>
            <h6>Empire Burger</h6>
            <span className="project-number">#01</span>
          </StyledSubTitle>
          <p>Landing page de uma hamburgueria fictícia!</p>
        </div>
        <div className="project-infos-footer">
          <span>
            TypeScript, ReactJS, Styled Components
          </span>
          <div className="project-social">
            <a href="https://github.com/JuniorCundari" target="_blank" rel="noreferrer">
              <img src={logoGitHub2} alt="Logo github" />
            </a>
            <a href="#sdasd">
              <img src={openSite} alt="Ícone para abrir site do projeto" />
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
}
