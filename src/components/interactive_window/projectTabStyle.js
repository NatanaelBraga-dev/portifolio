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

export const AnimatedDiv = styled.div`
    background-color: transparent;
    display: flex;
    flex-direction: column;
    align-items: center;

    &:hover > .description {
        opacity: 1; /* Torna visível */
        visibility: visible; /* Exibe o elemento */
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
    padding: 10px;
    opacity: 0; /* Invisível inicialmente */
    visibility: hidden; /* Oculta o elemento */
    transition: opacity 0.5s ease-in-out, visibility 0.5s ease-in-out; /* Transição suave */
    flex-direction: row;
    justify-content: center;

    /* Adicionamos uma classe para facilitar a seleção */
    &.description {
        /* Mantém o escopo da animação para o hover correto */
    }
`;

export const IconsProject1 = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center; /* Centraliza os ícones */
`;

export const ParagraphDescription1 = styled.p`
    background-color: transparent;
    font-family: 'JetBrains-Mono';
    font-size: 1.2rem;
    color: white;
    margin-top: 10px;
`;

