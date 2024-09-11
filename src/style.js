import styled, { createGlobalStyle } from 'styled-components';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';

// Estilo Global
export const GlobalStyle = createGlobalStyle`
  * {
    background-color: #040404;
  }

  @font-face {
    font-family: 'JetBrains-Mono';
    src: url('./JetBrains_fonte/static/JetBrainsMono-Regular.ttf') format('truetype');
  }
`;  

// Styled Components
export const PresentationArea = styled.div`
  color: white;
  display: flex;
  
  `;

export const PresentationContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 180px;
  top: 25px;
  height: 130px;
  justify-content: center;
  position: relative;
  left: 50px;
`;

export const PresentationText = styled.div
`
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
  position: relative;
  left: 180px;
`;

export const FotoPerfil = styled.img`
  border-radius: 50%;
  width: 130px;
  height: 130px;
  position: relative;
  transition: box-shadow 0.3s ease-in-out !important;

  &:hover{
    box-shadow: 0px 4.2px 6px rgba(30, 241, 165, 0.6) !important;
  }
  `;

export const ContainerIcons = styled.div`
  display: flex;
  height: 64px;
  width: 150px;
  align-items: center;
  justify-content: space-around;
  position: relative;
  left: 570px;
  margin-top: 45px;
`;

// Styled Components específicos para ícones
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


