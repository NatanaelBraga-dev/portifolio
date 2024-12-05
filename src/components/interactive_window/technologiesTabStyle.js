import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'JetBrains-Mono';
        src: url('./JetBrains_fonte/static/JetBrainsMono-Regular.ttf') format('truetype');
    }
`;

export const MainDiv = styled.div`
    display: flex;
    justify-content: center;    
    width: 80%;
    heigh: auto;
    background-color: transparent;
    flex-direction: column;
`

export const TechnologiesDiv = styled.div`
    display:flex;
    width: auto;
    justify-content: space-evenly;
    padding: 20px 10px 20px
`

export const ContainerIcons = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:center;
`
