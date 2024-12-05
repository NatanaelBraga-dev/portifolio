import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'JetBrains-Mono';
        src: url('./JetBrains_fonte/static/JetBrainsMono-Regular.ttf') format('truetype');
    }
`;

export const MainDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto; 
    background-color: #f0f0f0;
`;

export const ColumnDiv = styled.div`
    display: flex;
    flex-direction: column;
    heigh: auto;
`

export const AnimatedDiv = styled.div`
    background-color: transparent;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    cursor: pointer;
    transition: transform 0.3s ease-in-out;

    &:hover {
        animation: float 2s ease-in-out infinite; /* Adiciona a animação de flutuação */
    }

    &:hover > .description {
        opacity: 1; /* Torna visível */
        visibility: visible; /* Exibe o elemento */
    }

    @keyframes float {
        0% {
            transform: translateY(0); /* Posição inicial */
        }
        50% {
            transform: translateY(-10px); /* Move para cima */
        }
        100% {
            transform: translateY(0); /* Retorna à posição inicial */
        }
    }
`;


export const DivImage = styled.div`
    width: auto;
    height: auto;
    z-index: 1;
    background-color: transparent;
    border-radius: 10px;
`;

export const DivDescription = styled.div`
    background-color: transparent;
    color: white;
    width: 100%; 
    display: flex;
    padding: 10px;
    opacity: 0; /* Invisível inicialmente */
    visibility: hidden; /* Oculta o elemento */
    transition: opacity 0.5s ease-in-out, visibility 0.5s ease-in-out; /* Transição suave */
    flex-direction: column;
    justify-content: center;

    /* Adicionamos uma classe para facilitar a seleção */
    &.description {
        /* Mantém o escopo da animação para o hover correto */
    }
`;

export const ParagraphDescription1 = styled.p`
    background-color: transparent;
    font-family: 'JetBrains-Mono';
    font-size: 1.2rem;
    color: white;
    margin-top: 30px;
`;

export const TechnologiesIconsDiv = styled.div`
    display: flex;
    flex-direction: row;
    background-color: transparent;
    justify-content: space-evenly;
    align-items: center;
    border-bottom: 1px solid #1EF1A5B3;
    border-radius: 10px;
    padding-bottom: 8px;
    margin-bottom: 20px;
    
`