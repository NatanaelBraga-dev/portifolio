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
    margin-left: 20px
`

export const AboutMeContent = styled.div`
    color: white;
    font-family: 'JetBrains-Mono', monospace;
    display: flex;
    font-size: 18px;
    width: fit-content;
    align-items: flex-start; 
    text-align: left; 
    margin-left: 0px; 
    white-space: pre-wrap;
    margin-right: 50px;
    margin-top: 10px;
    margin-bottom: 20px;  
`

export const ExperienceContent = styled.div `
    color: white;
    font-family: 'JetBrains-Mono', monospace;
    display: flex;
    font-size: 18px;
    width: fit-content;
    align-items: flex-start; 
    text-align: left; 
    margin-left: 0; 
    white-space: pre-wrap;
    margin-top: 10px;
    margin-right: 60px; 
    margin-bottom: 20px;
    flex-direction: row;
    `
