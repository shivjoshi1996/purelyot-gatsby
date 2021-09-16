import { createGlobalStyle } from 'styled-components';

import font from '../fonts/recoleta-regular.woff2';

const Typography = createGlobalStyle`
  $primary-colour: #FEC5BB;
  $secondary-colour: #FFFFFF;
  $third-colour: #FAE1DD;
  $main-font-colour: #2F2E41;

  @font-face {
    font-family: Recoleta;
    src: url(${font});
  }
  
  html {
    font-family: 'Montserrat', san-serif;
  }
  h1,h2,h3,h4,h5,h6 {
    font-family: Recoleta;
  }
  h1 {
    font-size: 2rem;
  }
  h2 {
    font-size: 1.8rem;
    color: #2F2E41;
  }
  h3 {
    font-size: 1.5rem;
  }
  p {
    line-height: 1.7;
  }
`;

export default Typography;
