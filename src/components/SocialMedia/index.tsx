import { Container } from './styles';

interface SocialMediaProps {
  icon: string;
  href: string;
  alt: string;
  name?: string;
  colorSvg?: boolean;
}

export default function SocialMedia({
  icon, href, alt, name, colorSvg = false,
}: SocialMediaProps) {
  return (
    <Container colorSvg={colorSvg}>
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
      >
        <img src={icon} alt={alt} />
        {name}
      </a>
    </Container>
  );
}
