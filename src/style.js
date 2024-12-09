import styled, { createGlobalStyle } from 'styled-components';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';

export const GlobalStyle = createGlobalStyle`
  * {
    background-color: #040404;
  }

  @font-face {
    font-family: 'JetBrains-Mono';
    src: url('./JetBrains_fonte/static/JetBrainsMono-Regular.ttf') format('truetype');
  }

  /* Estilização da scrollbar */
  ::-webkit-scrollbar {
    width: 8px; /* Espessura da scrollbar */
  }

  ::-webkit-scrollbar-thumb {
    background-color: #555; /* Cor do "thumb" (parte rolável) */
    border-radius: 40px; /* Arredondamento para suavizar */
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #777; /* Cor do "thumb" ao passar o mouse */
  }

  ::-webkit-scrollbar-track {
    background-color: #222; /* Cor do trilho da scrollbar */
  }
`;

export const DivApp = styled.div`
  display: flex;
  flex-direction: column;
  height: 200vh;
  text-transform: none;
  font-family: 'JetBrains-Mono';
`;

export const PresentationArea = styled.div`
  color: white;
  display: flex;
  align-items: center; /* Alinhar verticalmente */
  justify-content: space-between; /* Espalhar o conteúdo */
  width: 100%; /* Ocupa 100% da largura */
  padding: 20px 40px;
  box-sizing: border-box; /* Inclui padding e border no tamanho total */
`;

export const PresentationContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  height: 130px;
  justify-content: center;
  margin-left: -280px; /* Espaço entre a foto e o texto */
`;

export const PresentationText = styled.div`
  font-weight: 600;
  font-family: 'JetBrains-Mono', monospace;
  font-size: 36px;
  position: relative;
  text-shadow: 0px 4px 4px #1EF1A599;
`;

export const PresentationText2 = styled.div`
  font-family: 'JetBrains-Mono', monospace;
  font-size: 31.5px;
  position: relative;
  text-shadow: 0px 4px 4px #1EF1A599;
  font-weight: 600;
`;

export const ContainerFotoPerfil = styled.div`
  display: flex;
  align-items: center;
  margin-top: 32px;
  margin-bottom: 10px;
  height: 126px;
  padding-left: 135px
`;

export const FotoPerfil = styled.img`
  border-radius: 50%;
  width: 130px;
  height: 130px;
  transition: box-shadow 0.3s ease-in-out !important;

  &:hover {
    box-shadow: 0px 4.2px 6px rgba(30, 241, 165, 0.6) !important;
  }
`;

export const ContainerIcons = styled.div`
  display: flex;
  height: 64px;
  align-items: center;
  justify-content: space-around;
  position: relative;
  width: 140px;
  padding-left: 20px;
  padding-right: 5px;
  bottom: 20px;
`;

export const GitHubIconStyled = styled(GitHubIcon)`
  color: #FFFFFF;
  font-size: 2.0rem !important;
  cursor: pointer;
  border-radius: 10px;
  transition: box-shadow 0.4s ease-in-out !important;

  &:hover {
    box-shadow: 0px 4px 8px rgba(30, 241, 165, 0.7) !important;
  }
`;

export const LinkedInIconStyled = styled(LinkedInIcon)`
  color: #FFFFFF;
  font-size: 2.0rem !important;
  cursor: pointer;
  border-radius: 10px;
  transition: box-shadow 0.4s ease-in-out !important;

  &:hover {
    box-shadow: 0px 4px 8px rgba(30, 241, 165, 0.7) !important;
  }
`;

export const InstagramIconStyled = styled(InstagramIcon)`
  color: #FFFFFF;
  font-size: 2.0rem !important;
  cursor: pointer;
  border-radius: 10px;
  transition: box-shadow 0.4s ease-in-out !important;

  &:hover { 
    box-shadow: 0px 4px 8px rgba(30, 241, 165, 0.7) !important;
  }
`;

export const CenteredContainer = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  height: 95vh;
  padding-top: 20px;
`;

export const ContainerTranslation = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  position: fixed;
  bottom: 13%; /* Responsivo - distância do botão em relação ao fundo */
  right: 2%;  /* Responsivo - distância em relação à lateral direita */
  z-index: 10; /* Garante que fique visível */
  background-color: transparent;
`;