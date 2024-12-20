import styled from "styled-components";

export const ContainerAboutMe = styled.div`
    position: relative;
    top: 240px; /* Desloca o elemento para baixo */
    display: flex;
    flex-direction: column; 
    align-items: center;
    text-align:center;
`;


export const TextContainer = styled.div`
    display:flex;
    flex-direction: column;
    text-align:center;
`

export const PresentationContainer = styled.div` 
    font-weight: 600;
    font-family: 'JetBrains-Mono', monospace;
    font-size: 22px;
    text-shadow: 0px 4px 4px #1EF1A599;
    background-color: transparent;
    color: white;
`

export const DescriptionContainer = styled.div`
    color: rgba(255, 255, 255, 0.5);
    display:flex;
    text-align: center;
    flex-direction: column;
    position: relative;
    top: 30px;
    width: 300px;
    margin-bottom: 30px;
`