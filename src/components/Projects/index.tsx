import Project from '../Project';
import StyledSubTitle from '../StyledSubTitle';
import { Container } from './styles';

export default function Projects() {
  return (
    <Container>
      <div className="projects-section-title">
        <StyledSubTitle>
          <h2>Projetos</h2>
        </StyledSubTitle>

        <p>Aqui você pode ver alguns dos meus projetos, pessoais e de estudos!</p>
      </div>

      <Project />
    </Container>
  );
}
