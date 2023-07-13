import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
        :root{
            --background: "#f0f2f5";
            --red: "#E52E4D";
            --blue: "#5429CC";
            --blue-light: "#6933FF";
            --text-title: "#363F5F";
            --text-body: "#969CB3";
            --shape: "#fff";
        }

        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        // *usando porcentagem teremos uma adpatacao melhor conforme vai aumentando ou diminuindo a tela. E caso usuario use o zoom para auemntar ou diminiur vai dar bom, ja usando o px vai manter daquele mesmo tamanha atrapalhando assim acessibilidade
        html{
            @media (max-width: 1080px){
                font-size: 93.75%; // *15px
            }

            @media (max-width: 720px){
                font-size: 87.5%; // *14px
            }
        }

        body{
            background: var(--background);
            -webkit-font-smoothing: antialiased; /* fontes mais nitidas */
        }

        button{
            cursor: pointer;
        }

        [disabled]{
            opacity: 0.6;
            cursor: not-allowed;
        }
`;