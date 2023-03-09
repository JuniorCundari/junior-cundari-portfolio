/* eslint-disable no-new */
import { useEffect } from 'react';
import HoverEffect from 'hover-effect';

import displacement from '../../assets/images/img/displacement.webp';
import myContacts from '../../assets/images/img/banner-my-contacts.webp';
import myContacts2 from '../../assets/images/img/banner-my-contacts-2.webp';
import bannerEmpireBurger from '../../assets/images/img/banner-empire-burger.webp';
import bannerEmpireBurger2 from '../../assets/images/img/banner-empire-burger-2.webp';
import bannerNlwEsports from '../../assets/images/img/banner-nlw-esports.webp';
import bannerNlwEsports2 from '../../assets/images/img/banner-nlw-esports2.webp';
import bannerRocketCard from '../../assets/images/img/banner-rocket-card.webp';
import bannerRocketCard2 from '../../assets/images/img/banner-rocket-card-2.webp';
import bannerSocialTree from '../../assets/images/img/banner-social-tree.webp';
import bannerSocialTree2 from '../../assets/images/img/banner-social-tree-2.webp';

import logoGitHub2 from '../../assets/images/svg/social/logo-github2.svg';
import openSite from '../../assets/images/svg/icons/open.svg';

import { Animate } from '../../utils/Animate';

import { Container } from './styles';

const projects = [
  {
    id: 1,
    number: '01',
    title: 'My Contacts',
    languages: 'NodeJS, ReactJS, Styled Components',
    repository: 'https://github.com/JuniorCundari/jstack-mycontacts',
    banner: {
      1: myContacts,
      2: myContacts2,
    },
  },
  {
    id: 2,
    number: '01',
    title: 'Empire Burger',
    languages: 'TypeScript, ReactJS, Styled Components',
    repository: 'https://github.com/JuniorCundari/br-challenges-empire-burger',
    webSite: 'https://br-challenges-empire-burger-pearl.vercel.app/',
    banner: {
      1: bannerEmpireBurger,
      2: bannerEmpireBurger2,
    },
  },
  {
    id: 3,
    number: '03',
    title: 'NLW eSports',
    languages: 'TypeScript, ReactJS, NodeJS',
    repository: 'https://github.com/JuniorCundari/nlw-esports-ignite',
    banner: {
      1: bannerNlwEsports,
      2: bannerNlwEsports2,
    },
  },
  {
    id: 4,
    number: '04',
    title: 'Rocket Card',
    languages: 'ReactJS, Styled Components',
    repository: 'https://github.com/JuniorCundari/rocket-card-github',
    webSite: 'https://rocket-card-github.vercel.app/',
    banner: {
      1: bannerRocketCard,
      2: bannerRocketCard2,
    },
  },
  {
    id: 5,
    number: '05',
    title: 'Social Tree',
    languages: 'HTML5, CSS3',
    repository: 'https://github.com/JuniorCundari/desafio-social-tree-rocketseat-discover',
    webSite: 'https://juniorcundari.github.io/desafio-social-tree-rocketseat-discover/',
    banner: {
      1: bannerSocialTree,
      2: bannerSocialTree2,
    },
  },
];

export default function Project() {
  useEffect(() => {
    Array.from(document.querySelectorAll('.wrapper')).forEach((element: any) => {
      const imgs: any = Array.from(element.querySelectorAll('img'));
      new HoverEffect({
        parent: element,
        intensity: 0.5,
        image1: imgs[0].getAttribute('src'),
        image2: imgs[1].getAttribute('src'),
        displacementImage: element.dataset.displacement,
      });

      console.clear();
    });
  }, []);

  return (
    <>
      {projects.map((project) => (
        <Animate.FadeIn key={project.id}>
          <Container projectWebSite={project.webSite ? '0' : '1'}>
            <div className="project-title">
              <span className="project-number">{`${project.number}.`}</span>
              <h3>{project.title}</h3>
            </div>

            <div
              className="wrapper"
              data-displacement={displacement}
            >
              <img
                src={project.banner[1]}
                alt={`Banner ${project.title}`}
                className="banner"
              />
              <img
                src={project.banner[2]}
                alt={`Banner ${project.title}`}
                className="banner"
              />
            </div>

            <div className="project-footer">
              <a
                href={project.repository}
                target="_blank"
                rel="noreferrer"
              >
                <img src={logoGitHub2} alt="Logo github" />
              </a>
              <span>
                {project.languages}
              </span>
              {project.webSite && (
              <a
                href={project.webSite}
                target="_blank"
                rel="noreferrer"
              >
                <img src={openSite} alt="Ícone para abrir o site do projeto" />
              </a>
              )}
            </div>
          </Container>
        </Animate.FadeIn>
      ))}
    </>
  );
}
