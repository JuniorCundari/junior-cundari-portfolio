import Language from '../Language';

import { Container } from './styles';

import react from '../../assets/images/svg/languages/logo-react.svg';
import typescript from '../../assets/images/svg/languages/logo-typescript.svg';
import html from '../../assets/images/svg/languages/logo-html.svg';
import tailwind from '../../assets/images/svg/languages/logo-tailwind.svg';
import javascript from '../../assets/images/svg/languages/logo-javascript.svg';
import node from '../../assets/images/svg/languages/logo-node.svg';
import styledcomponents from '../../assets/images/svg/languages/logo-styled-components.svg';
import css from '../../assets/images/svg/languages/logo-css.svg';
import sass from '../../assets/images/svg/languages/logo-sass.svg';

export default function About() {
  return (
    <Container id="anchor-about">
      <div className="text-about">
        <p>
          Olá, seja bem-vindo(a), meu nome é José Roberto, mas pode me chamar de Junior Cundari 😀,
          sou Desenvolvedor Front-end Júnior apaixonado por tecnologia e programação.
        </p>
      </div>

      <div className="languages-wrapper">
        <div className="languages-box">
          <Language
            icon={react}
            alt="logo react"
            name="ReactJS"
          />

          <Language
            icon={typescript}
            alt="logo typescript"
            name="TypeScript"
          />

          <Language
            icon={html}
            alt="logo html"
            name="HTML5"
          />

          <Language
            icon={tailwind}
            alt="logo tailwind"
            name="Tailwind CSS"
          />

          <Language
            icon={javascript}
            alt="logo javascript"
            name="JavaScript"
          />
          <Language
            icon={javascript}
            alt="logo javascript"
            name="JavaScript"
          />
          <Language
            icon={javascript}
            alt="logo javascript"
            name="JavaScript"
          />
        </div>

        <div className="languages-box">
          <Language
            icon={node}
            alt="logo node"
            name="NodeJS"
          />

          <Language
            icon={styledcomponents}
            alt="logo styled components"
            name="Styled Components"
          />

          <Language
            icon={css}
            alt="logo css"
            name="CSS3"
          />

          <Language
            icon={sass}
            alt="logo sass"
            name="Sass"
          />
          <Language
            icon={sass}
            alt="logo sass"
            name="Sass"
          />
          <Language
            icon={sass}
            alt="logo sass"
            name="Sass"
          />
        </div>
      </div>
    </Container>
  );
}
