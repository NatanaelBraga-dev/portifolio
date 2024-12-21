import styled from 'styled-components';

export const MainDiv = styled.div`
    display: flex;
    justify-content: center; /* Alinha itens no centro horizontalmente */
    position: relative;
    width: 100%;
    overflow-x: hidden; /* Impede scroll horizontal */
    flex-direction: column;
    align-items: center;
    margin-bottom: 200px;
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

export const HorizontalDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start; /* Mantém alinhado no topo */
    justify-content: space-around;
    width: 100%;
    gap: 20px; /* Espaçamento entre colunas */
`;

export const ColumnDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px; /* Espaçamento entre AnimatedDivs */
`;

export const AnimatedDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    width: fit-content;
    margin-bottom: 0; /* Remova o espaçamento fixo */
    min-height: 200px; /* Define altura mínima */
`;

export const DivDescription = styled.div`
    background-color: transparent;
    color: white;
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 160px; /* Defina largura fixa para alinhamento */
`;

export const DivImage = styled.div`
    height: 140px; /* Altura fixa */
    background-color: transparent;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ParagraphDescription1 = styled.p`
    margin:0px;
`;

export const ParagraphDescription2 = styled.p`
    margin-top: 25px;
    margin-bottom: 0px;
`;

export const TechnologiesIconsDiv = styled.div`
    display: flex;
    flex-direction: row;
    background-color: transparent;
    justify-content: space-evenly;
    align-items: center;
    border-bottom: 1px solid #1EF1A5B3;
    margin-top: 15px;
    border-radius: 10px;
    padding-bottom: 8px;
    margin-bottom: 20px;
`;

export const ContainerEmptyDiv = styled.div`
    width: 160px; /* Mesma largura dos outros elementos */
    height: 224px; /* Alinhado à altura mínima do AnimatedDiv */
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    background-color: transparent; /* Garante transparência */
    border-radius: 10px; /* Para manter o design uniforme */
    margin-top:30px;
`