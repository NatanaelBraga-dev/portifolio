import styled from 'styled-components';

export const MainDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto; 
    margin-bottom: 50px;
    `;

export const HorizontalDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start; /* Mantém alinhado no topo */
    justify-content: space-around;
    width: 100%;
    gap: 20px; /* Espaçamento entre colunas */
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

export const ColumnDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    width:170px;
`;

export const AnimatedDiv = styled.div`
    background-color: transparent;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
    cursor: pointer;
    transition: transform 0.3s ease-in-out;
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
`;

export const ParagraphDescription1 = styled.p`
    font-family: 'JetBrains-Mono';
    font-size: 1rem;
    color: white;
    margin: 0;
`;

export const MaximizedImageContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 9999;
    animation: fadeIn 0.3s ease-in-out forwards;
    transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
    transform: ${({ isClosing }) => (isClosing ? 'scale(0.9)' : 'scale(1)')};
    opacity: ${({ isClosing }) => (isClosing ? 0 : 1)};
    
    img {
        max-width: 80%;
        max-height: 80%;
        border-radius: 10px;
        transition: transform 0.3s ease-in-out;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;

export const CloseButton = styled.button`
    position: absolute;
    top: 20px;
    right: 20px;
    background-color: transparent;
    color: white;
    font-size: 2rem;
    border: none;
    cursor: pointer;
`;
