import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle `

    @font-face {
        font-family: 'JetBrains-Mono';
        src: url('./JetBrains_fonte/static/JetBrainsMono-Regular.ttf') format('truetype');
    }
`

export const SobreMimTabPanel = styled.div `
    background-color: black;
    display: flex;
    color: white;
    font-family: 'JetBrains-Mono', monospace;
`

export const AboutMeContent = styled.div`
    color: white;
    font-family: 'JetBrains-Mono', monospace;
    display: flex;
    font-size: 18px;
    width: fit-content;
    align-items: flex-start; 
    text-align: left; 
    white-space: pre-wrap;
    padding-top: 10px;
    padding-bottom: 20px;
`

export const ExperienceContent = styled.div `
    color: white;
    font-family: 'JetBrains-Mono', monospace;
    display: flex;
    font-size: 18px;
    width: fit-content;
    align-items: flex-start; 
    text-align: left; 
    padding-top: 10px;
    white-space: pre-wrap; 
    flex-direction: row;
    `
