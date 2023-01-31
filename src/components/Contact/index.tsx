import SocialMedia from '../SocialMedia';
import Gradient from '../Gradient';

import github from '../../assets/images/svg/social/logo-github.svg';
import linkedin from '../../assets/images/svg/social/logo-linkedin.svg';
import whatsapp from '../../assets/images/svg/social/logo-whatsapp.svg';
import mail from '../../assets/images/svg/social/logo-mail.svg';

import { Container } from './styles';

export default function Contact() {
  return (
    <Container id="anchor-contact" data-scroll-section>
      <div>
        <Gradient>
          <h2>
            Gostou do meu trabalho?
          </h2>
          <h2>
            Ou acha que posso fazer parte da sua equipe?
          </h2>
        </Gradient>
        <p>
          Envie um e-mail para jrcundari@yahoo.com.br ou me chame no whatsapp,
          ficarei muito feliz com seu contato! 😀
        </p>
      </div>

      <div className="contact-social">
        <Gradient>
          <h3>Me adicione nas redes sociais!</h3>
        </Gradient>

        <ul>
          <SocialMedia
            icon={github}
            href="https://github.com/JuniorCundari"
            alt="Logo Github"
            colorSvg
          />

          <SocialMedia
            icon={linkedin}
            href="https://www.linkedin.com/in/juniorcundari/"
            alt="Logo Linkedin"
            colorSvg
          />

          <SocialMedia
            icon={whatsapp}
            href="https://api.whatsapp.com/send?phone=5511971906481"
            alt="Logo Whatsapp"
            colorSvg
          />

          <SocialMedia
            icon={mail}
            href="mailto:jrcundari@yahoo.com.br"
            alt="Logo Email"
            colorSvg
          />
        </ul>
      </div>
    </Container>
  );
}
