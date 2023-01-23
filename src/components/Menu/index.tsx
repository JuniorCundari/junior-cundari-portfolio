import SocialMedia from '../SocialMedia';
import StyledSubTitle from '../StyledSubTitle';
import { MenuMobileProps } from '../MenuBurger';

import github from '../../assets/images/svg/social/logo-github.svg';
import linkedin from '../../assets/images/svg/social/logo-linkedin.svg';
import whatsapp from '../../assets/images/svg/social/logo-whatsapp.svg';
import mail from '../../assets/images/svg/social/logo-mail.svg';

import { StyledMenu } from './styles';

export default function Menu({ open, setOpen }: MenuMobileProps) {
  const close = () => setOpen(false);

  return (
    <StyledMenu open={open}>
      <div className="navigation-list">
        <StyledSubTitle>
          redes sociais
        </StyledSubTitle>

        <ul className="nav-social-list">
          <SocialMedia
            icon={github}
            href="https://github.com/JuniorCundari"
            alt="Logo Github"
            name="Github"
          />

          <SocialMedia
            icon={linkedin}
            href="https://www.linkedin.com/in/juniorcundari/"
            alt="Logo Linkedin"
            name="LinkedIn"
          />

          <SocialMedia
            icon={whatsapp}
            href="https://api.whatsapp.com/send?phone=5511971906481"
            alt="Logo Whatsapp"
            name="Whatsapp"
          />

          <SocialMedia
            icon={mail}
            href="https://www.linkedin.com/in/juniorcundari/"
            alt="Logo Email"
            name="E-mail"
          />
        </ul>
      </div>

      <div className="navigation-list">
        <StyledSubTitle>
          Menu
        </StyledSubTitle>

        <ul className="nav-menu-list">
          <li>
            <a
              href="#anchor-home"
              onClick={() => close()}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#anchor-about"
              onClick={() => close()}
            >
              Sobre
            </a>
          </li>
          <li>
            <a
              href="#anchor-projects"
              onClick={() => close()}
            >
              Projetos
            </a>
          </li>
          <li>
            <a
              href="#anchor-contact"
              onClick={() => close()}
            >
              Contato
            </a>
          </li>
        </ul>
      </div>
    </StyledMenu>
  );
}
