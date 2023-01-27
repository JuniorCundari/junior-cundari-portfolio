import SocialMedia from '../SocialMedia';
import Gradient from '../Gradient';
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
        <Gradient>
          <h3>redes sociais</h3>
        </Gradient>

        <ul className="nav-social-list">
          <SocialMedia
            icon={github}
            href="https://github.com/JuniorCundari"
            alt="Logo Github"
            name="Github"
            colorSvg
          />

          <SocialMedia
            icon={linkedin}
            href="https://www.linkedin.com/in/juniorcundari/"
            alt="Logo Linkedin"
            name="LinkedIn"
            colorSvg
          />

          <SocialMedia
            icon={whatsapp}
            href="https://api.whatsapp.com/send?phone=5511971906481"
            alt="Logo Whatsapp"
            name="Whatsapp"
            colorSvg
          />

          <SocialMedia
            icon={mail}
            href="mailto:jrcundari@yahoo.com.br"
            alt="Logo Email"
            name="E-mail"
            colorSvg
          />
        </ul>
      </div>

      <div className="navigation-list">
        <Gradient>
          <h3>Menu</h3>
        </Gradient>

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
