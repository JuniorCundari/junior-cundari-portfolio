import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    font-size: 62.5%;
    --cubicbz: cubic-bezier(0.9, 0, 0.1, 1);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: ${({ theme }) => theme.colors.white};
  }

  h1,
  h2,
  h3,
  span,
  .span-title,
  a,
  p {
    font-size: clamp(var(--min), var(--val), var(--max));
  }

  h1, .span-title {
    --min: 4rem;
    --val: 5vw;
    --max: 8rem;
  }

  h2 {
    --min: 2.4rem;
    --val: 4vw;
    --max: 4rem;
  }

  h3 {
    --min: 2.4rem;
    --val: 3vw;
    --max: 3.2rem;
  }

  a {
    --min: 1.2rem;
    --val: 1.2vw;
    --max: 2rem;
  }

  span, p {
    --min: 1.6rem;
    --val: 2vw;
    --max: 2rem;
  }

  html {
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    scroll-behavior: smooth;
  }

  body {
    overflow-x: hidden;
    background: ${({ theme }) => theme.colors.background};
    font-family: 'Ubuntu Mono', sans-serif;
    font-size: 1.6rem;
    line-height: 1.6;
    position: relative;
    width: 100vw;
    height: 100vh;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }

  li {
    list-style: none;
  }

  html.has-scroll-smooth {
    overflow: hidden;
  }

  html.has-scroll-dragging {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .has-scroll-smooth body {
    overflow: hidden;
  }

  .has-scroll-smooth [data-scroll-container] {
    min-height: 100vh;
  }

  [data-scroll-direction="horizontal"] [data-scroll-container] {
    height: 100vh;
    display: inline-block;
    white-space: nowrap;
  }

  [data-scroll-direction="horizontal"] [data-scroll-section] {
    display: inline-block;
    vertical-align: top;
    white-space: nowrap;
    height: 100%;
  }

  .c-scrollbar {
    position: absolute;
    right: 0;
    top: 0;
    width: 11px;
    height: 100%;
    transform-origin: center right;
    transition: transform 0.3s, opacity 0.3s;
    opacity: 0;
  }

    .c-scrollbar:hover {
      transform: scaleX(1.45);
  }

    .c-scrollbar:hover, .has-scroll-scrolling .c-scrollbar, .has-scroll-dragging .c-scrollbar {
      opacity: 1;
  }

  [data-scroll-direction="horizontal"] .c-scrollbar {
      width: 100%;
      height: 10px;
      top: auto;
      bottom: 0;
      transform: scaleY(1);
  }

  [data-scroll-direction="horizontal"] .c-scrollbar:hover {
    transform: scaleY(1.3);
  }

  .c-scrollbar_thumb {
    position: absolute;
    top: 0;
    right: 0;
    background-color: black;
    opacity: 0.5;
    width: 7px;
    border-radius: 10px;
    margin: 2px;
    cursor: -webkit-grab;
    cursor: grab;
  }

  .has-scroll-dragging .c-scrollbar_thumb {
    cursor: -webkit-grabbing;
    cursor: grabbing;
  }

  [data-scroll-direction="horizontal"] .c-scrollbar_thumb {
    right: auto;
    bottom: 0;
  }
`;
