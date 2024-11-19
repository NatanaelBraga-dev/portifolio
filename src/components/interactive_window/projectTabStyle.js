import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle `
    @font-face {
        font-family: 'JetBrains-Mono';
        src: url('./JetBrains_fonte/static/JetBrainsMono-Regular.ttf') format('truetype');
    }
`

export const MainDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 412px;
    height: 300px; 
    background-color: #f0f0f0;
`

export const AnimatedDiv = styled.div`
    background-color: transparent;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const DivImage1 = styled.div`
    width: auto;
    heigh: auto;
    z-index: 1;
    margin-bottom: -20px;
    background-color: transparent;
    `

export const DivDescription1 = styled.div`
    background-color: rgba(217, 217, 217, 0.9);
    width: 100%; 
    padding: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    
`

export const IconsProject1 = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center; /* Centraliza os ícones */
`
export const ParagraphDescription1 = styled.p`
    background-color: transparent;
    font-family: 'JetBrains-Mono';
    font-size: 1.2rem;
    color: #000000;
    margin-top: 10px;
    
`