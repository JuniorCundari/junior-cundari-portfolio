import { Animate } from '../../utils/Animate';

import SocialMedia from '../SocialMedia';
import Gradient from '../Gradient';

import github from '../../assets/images/svg/social/logo-github.svg';
import linkedin from '../../assets/images/svg/social/logo-linkedin.svg';
import whatsapp from '../../assets/images/svg/social/logo-whatsapp.svg';
import mail from '../../assets/images/svg/social/logo-mail.svg';

import { Container } from './styles';

export default function Contact() {
  return (
    <Container id="anchor-contact">
      <Animate.FadeLeft>
        <Gradient>
          <h2>
            O que você achou do meu trabalho? Você está considerando adicionar alguém à sua equipe?
          </h2>
        </Gradient>
        <p>
          Não perca a chance de ter um profissional dedicado e altamente competente em sua equipe.
          Com minha experiência em HTML5, CSS3,
          JavaScript e ReactJS, posso agregar um valor significativo ao seu negócio.
        </p>
        <p>
          Vamos conversar sobre como podemos trabalhar juntos de forma produtiva?
          Envie um e-mail para (jrcundari@yahoo.com.br) ou entre em contato através do
          Whatsapp (5511971906481)
          agora mesmo e vamos fazer acontecer! 😀
        </p>
      </Animate.FadeLeft>

      <Animate.FadeLeft>
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
      </Animate.FadeLeft>
    </Container>
  );
}
