import { Container } from './styles';

interface LanguageProps {
  icon: string;
  alt: string;
  name: string;
}

export default function Language({ icon, alt, name }: LanguageProps) {
  return (
    <Container>
      <img src={icon} alt={alt} />
      <span>{name}</span>
    </Container>
  );
}
