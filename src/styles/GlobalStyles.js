import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root{
        --background-light : #fff;
        --border-color :#E5E5E5;
        --dark-shadow : 0,0,0;

        --color-brand-100 : #e7ebef;
        --color-brand-200 : #cfd6df;
        --color-brand-300 : #b7c2cf;
        --color-brand-400 : #9faebf;
        --color-brand-500 : #879ab0;
        --color-brand-600 : #6f85a0;
        --color-brand-700 : #577190;
        --color-brand-800 : #3f5d80;
        --color-brand-900 : #274870;
        --color-brand-1000 : #0f3460;

        --color-dark-50 : #F1F1F1;
        --color-dark-100 : #e6e7e7;
        --color-dark-200 : #cdcfd0;
        --color-dark-300 : #b4b6b8;
        --color-dark-400 : #9b9ea0;
        --color-dark-500 : #828689;
        --color-dark-600 : #686e71;
        --color-dark-700 : #4f5659;
        --color-dark-800 : #363d41;
        --color-dark-900 : #1d252a;
        --color-dark-1000 : #040d12;

        &.dark-mode {
            --color-dark-100 : #040d12;
            --color-dark-200 : #1d252a;
            --color-dark-300 : #363d41;
            --color-dark-400 : #4f5659;
            --color-dark-500 : #686e71;
            --color-dark-600 : #828689;
            --color-dark-700 : #9b9ea0;
            --color-dark-800 : #b4b6b8;
            --color-dark-900 : #cdcfd0;
            --color-dark-1000 : #e6e7e7;
        }

    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: "Montserrat", sans-serif;
    }

    img {
        display: block;
    }

    .container {
        max-width: 1140px;
        width: 94%;
        margin: 0 auto;
    }

    .react-icons {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.5rem;
    }
`;

export default GlobalStyles;
