import * as T from './theme'
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  a,
  button {
    cursor: pointer;
  }

  html,
  body {
    height: 100%;
    font-size: 20px;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: ${T.font.family};
    letter-spacing: .05em;
    line-height: 1.2;
    min-width: 320px;
    background: ${T.color.bodyBg};
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100%;
  }

  h2 {
    font-size: 1.125rem;
    font-weight: 400;
    margin-bottom: .5em;
  }

  h3 {
    font-size: 0.875rem;
    font-weight: 200;
  }

  p {
    margin-bottom: 20px;
  }

  strong {
    font-weight: 700;
  }
`;

export default GlobalStyle;
