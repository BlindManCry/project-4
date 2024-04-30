import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`


@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap');


    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }

    body {
        font-family: Plus Jakarta Sans, sans-serif;
        display: flex;
        justify-content: center;
        background: #F7FAFD;
        padding: 6.3rem 0rem 8rem 0rem;
    }

    @media screen and (max-width: 480px) {
        body {
            padding: 0rem;
        }
    }
`;
