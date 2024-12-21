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
    height: auto;
    background-color: transparent;
    flex-direction: column;
    width: 100%;
    align-items:center;
    margin-bottom: 200px;
`;

export const TechnologiesDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    @media (min-width: 768px) {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;
        gap: 10px;
    }
`;

export const ContainerIcons = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
    justify-content:space-evenly;
    width:100%;
`;

export const TitleDiv = styled.div`
    font-weight: 600;
    font-family: 'JetBrains-Mono', monospace;
    font-size: 22px;
    text-shadow: 0px 4px 4px #1EF1A599;
    background-color: transparent;
    color: white;
    width:fit-content;
    margin-bottom: 50px;
    `