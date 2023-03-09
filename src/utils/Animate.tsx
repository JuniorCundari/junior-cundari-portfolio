import {
  CSSProperties, PropsWithChildren, RefObject, useEffect, useRef, useState,
} from 'react';

interface Props extends PropsWithChildren {
  from: CSSProperties;
  to: CSSProperties
}

function useElementOnScreen(ref: RefObject<Element>, rootMargin = '-150px') {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { rootMargin },
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);
  return isIntersecting;
}

function AnimateIn({ from, to, children }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const onScreen = useElementOnScreen(ref);
  const defaultStyles: CSSProperties = {
    transition: '300ms ease-in-out',
  };
  return (
    <div
      ref={ref}
      style={
            onScreen
              ? {
                ...defaultStyles,
                ...to,
              }
              : {
                ...defaultStyles,
                ...from,
              }
          }
    >
      {children}
    </div>
  );
}

function FadeIn({ children }: PropsWithChildren) {
  return (
    <AnimateIn from={{ opacity: 0 }} to={{ opacity: 1 }}>
      {children}
    </AnimateIn>
  );
}

function FadeUp({ children }: PropsWithChildren) {
  return (
    <AnimateIn
      from={{ opacity: 0, translate: '0 2rem' }}
      to={{ opacity: 1, translate: 'none' }}
    >
      {children}
    </AnimateIn>
  );
}

function FadeDown({ children }: PropsWithChildren) {
  return (
    <AnimateIn
      from={{ opacity: 0, translate: 'none' }}
      to={{ opacity: 1, translate: '0 2rem' }}
    >
      {children}
    </AnimateIn>
  );
}

function FadeLeft({ children }: PropsWithChildren) {
  return (
    <AnimateIn
      from={{ opacity: 0, translate: '-10rem' }}
      to={{ opacity: 1, translate: '0' }}
    >
      {children}
    </AnimateIn>
  );
}

function FadeRight({ children }: PropsWithChildren) {
  return (
    <AnimateIn
      from={{ opacity: 0, transform: '-100rem' }}
      to={{ opacity: 1, translate: '0' }}
    >
      {children}
    </AnimateIn>
  );
}

function ScaleIn({ children }: PropsWithChildren) {
  return (
    <AnimateIn from={{ scale: '0' }} to={{ scale: '1' }}>
      {children}
    </AnimateIn>
  );
}

export const Animate = {
  FadeIn,
  FadeUp,
  FadeDown,
  FadeLeft,
  FadeRight,
  ScaleIn,
};
