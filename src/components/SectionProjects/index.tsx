import Project from '../Project';
import Gradient from '../Gradient';

import { Container } from './styles';

export default function SectionProjects() {
  return (
    <Container id="anchor-projects">
      <div className="projects-section-title">
        <Gradient>
          <h2>Projetos</h2>
        </Gradient>

        <p>Aqui você pode ver alguns dos meus projetos pessoais e de estudos!</p>
      </div>

      <div className="wrapper-projects">
        <Project />
      </div>
    </Container>
  );
}
