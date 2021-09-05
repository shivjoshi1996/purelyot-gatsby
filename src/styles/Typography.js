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
`;

export default Typography;
