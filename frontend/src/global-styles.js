
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html, body {
    font: 300 14px "Gotham SSm A","Gotham SSm B",Arial,Helvetica,sans-serif;
    color: #fff;
    text-shadow: 1px 1px 1px rgba(0,0,0,.5);
    -webkit-font-smoothing: antialiased;
    background: #000 no-repeat 50% 0;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    display: block;
    *, ::after, ::before {
        -webkit-box-sizing: inherit;
        box-sizing: inherit;
    }
}`;