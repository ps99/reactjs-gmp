// import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  :root {
    --color-bg-body: rgb(85 85 85);
    --color-bg-main: rgb(35 35 35);
    --color-text-main: rgb (255 255 255 / 0.7);
    --color-text-title: rgb(246 82 97);
    --border-radius: 4px;
    --font-family: "Montserrat",sans-serif;
    --primary-btn-bg: rgb(96 96 96 / 0.68);
    --primary-btn-color: 
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
    font-family: var(--font-family);
    letter-spacing: .05em;
    line-height: 1.2;
    min-width: 320px;
    background: var(--color-bg-body);
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
