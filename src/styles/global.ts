import { createGlobalStyle } from "styled-components";
import { colors } from "./variables";

export const GlobalStyle = createGlobalStyle`
      
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        /* usando porcentagem teremos uma adpatacao melhor conforme vai aumentando ou diminuindo a tela. E caso usuario use o zoom para auemntar ou diminiur vai dar bom, ja usando o px vai manter daquele mesmo tamanha atrapalhando assim acessibilidade */
        html{
            @media (max-width: 1080px){
                font-size: 93.75%;   /* 15px */
            }

            @media (max-width: 720px){
                font-size: 87.5%; /* 14px */
            }
        }

        body{
            background: ${colors.background};

            -webkit-font-smoothing: antialiased; /* fontes mais nitidas */
        }

        body, input, textarea, button {
            font-family: 'Poppins', sans-serif;
            font-weight: 400; /* por padrao o font weigth e 500 e Poppins o regular tem o peso 400.*/
        }

        h1, h2, h3, h4, h5, h6, strong{
            font-weight: 600;
        }

        button{
            cursor: pointer;
        }

        [disabled]{
            opacity: 0.6;

            cursor: not-allowed;
        }

        .react-modal-overlay{
            background: rgba(0, 0, 0, 0.5);

            position: fixed;
            top: 0;
            bottom: 0;
            right: 0;
            left: 0;

            display: flex;
            align-items: center;
            justify-content: center;
        }

        .react-modal-content{
            width: 100%;
            max-width: 576px;

            background: ${colors.background};

            padding: 3rem;

            position: relative;

            border-radius: 0.24rem;
        }

        .react-modal-close{
            position: absolute;
            right: 1.5rem;
            top: 1.5rem;

            border: 0;

            background: transparent;
            
            transition: filter 0.2s;

            &:hover{
                filter: brightness(0.8);
            }
        }
`;
