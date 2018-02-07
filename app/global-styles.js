import { injectGlobal } from 'styled-components';
//import DancingScript from 'assets/fonts/DancingScript-Bold.ttf';
// import BannerImg from './assets/images/banner.jpg';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }



  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }
  .header-img {
    background-image: url('assets/images/banner.jpg');
    height: 100px;
  }
  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }



`;
