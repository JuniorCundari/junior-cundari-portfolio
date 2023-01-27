import logo from '../../assets/images/svg/icons/logo.svg';
import SocialMedia from '../SocialMedia';

import github from '../../assets/images/svg/social/logo-github.svg';
import linkedin from '../../assets/images/svg/social/logo-linkedin.svg';
import whatsapp from '../../assets/images/svg/social/logo-whatsapp.svg';
import mail from '../../assets/images/svg/social/logo-mail.svg';

import { Container, StyledBorderTop } from './styles';

export default function Footer() {
  return (
    <>
      <StyledBorderTop />

      <Container>
        <img src={logo} alt="" />

        <ul>
          <SocialMedia
            icon={github}
            href="https://github.com/JuniorCundari"
            alt="Logo Github"
          />

          <SocialMedia
            icon={linkedin}
            href="https://www.linkedin.com/in/juniorcundari/"
            alt="Logo Linkedin"
          />

          <SocialMedia
            icon={whatsapp}
            href="https://api.whatsapp.com/send?phone=5511971906481"
            alt="Logo Whatsapp"
          />

          <SocialMedia
            icon={mail}
            href="mailto:jrcundari@yahoo.com.br"
            alt="Logo Email"
          />
        </ul>
      </Container>
    </>
  );
}
