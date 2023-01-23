import SocialMedia from '../SocialMedia';

import github from '../../assets/images/svg/social/logo-github.svg';
import linkedin from '../../assets/images/svg/social/logo-linkedin.svg';
import whatsapp from '../../assets/images/svg/social/logo-whatsapp.svg';
import mail from '../../assets/images/svg/social/logo-mail.svg';

import { Container } from './styles';

export default function Home() {
  return (
    <Container>
      <h1>
        buscar a melhor solução para o seu
        {' '}
        <span>produto</span>
        {' '}
        é o que me motiva.
      </h1>

      <div>
        <a href="https://api.whatsapp.com/send?phone=5511971906481">
          Entre em contato!
        </a>
      </div>

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
          href="https://www.linkedin.com/in/juniorcundari/"
          alt="Logo Email"
        />
      </ul>
    </Container>
  );
}