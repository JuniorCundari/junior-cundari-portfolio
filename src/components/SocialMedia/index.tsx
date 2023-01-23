import { Container } from './styles';

interface SocialMediaProps {
  icon: string;
  href: string;
  alt: string;
  name?: string;
}

export default function SocialMedia({
  icon, href, alt, name,
}: SocialMediaProps) {
  return (
    <Container>
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
