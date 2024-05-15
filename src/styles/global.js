import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        font-size: 62.5%;
    }

    body {
        background-color: ${ ({ theme }) => theme.colors.background_900 };
        color: ${ ({ theme }) => theme.colors.white };
        -webkit-font-smoothing: antialiased;
    }

    body, button, input, textarea {
        font-family: 'Roboto Slab', serif;
    }

    a {
        text-decoration: none
    }

    button, a {
        cursor: pointer;
        transition: filter .2s;
    }

    button:hover, a:hover {
        filter: brightness(0.9);
    }
`;