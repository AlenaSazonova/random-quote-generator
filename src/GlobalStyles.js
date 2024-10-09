import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /*Обнуление*/
* {
    padding: 0;
    margin: 0;
    border: 0;
}

*,
*:before,
*:after {/*
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    */
}

:focus,
:active {
    outline: none;
}

a:focus,
a:active {
    outline: none;
}

nav,
footer,
header,
aside {
    display: block;
}

html,
body {
    height: 100%;
    width: 100%;
    font-family: "";
    font-size: 100%;
    line-height: 1;
    font-size: 22px;
    -ms-text-size-adjust: 100%;
    -moz-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
}

input,
button,
textarea {
    font-family: inherit;
}

input::-ms-clear {
    display: none;
}

button {
    cursor: pointer;
}

button::-moz-focus-inner {
    padding: 0;
    border: 0;
}

a,
a:visited {
    text-decoration: none;
}

a:hover {
    text-decoration: none;
}

ul li {
    list-style: none;
}

img {
    vertical-align: top;
}

h1, h2, h3, h4, h5, h6 {
    font-family: 'Open-Sans', sans-serif;
    font-size: inherit;
    font-weight: 400;
}


/*--------------------*/

body {
    font-family: 'Cormorant-Garamond', serif;
    height: 100%;
    font-weight: 600;
    max-width: 1600px;
    margin: 0 auto;
    box-sizing: border-box;
    overflow-x: hidden;
}

.wrapper {
    width: 100%;
    min-height: 100%;
    overflow: hidden;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    /*padding: 0 15px;*/
        /*прижать подвал*/
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        /*прижать подвал*/

        -webkit-box-sizing: content-box;
            box-sizing: content-box;
}
`;

export default GlobalStyle;