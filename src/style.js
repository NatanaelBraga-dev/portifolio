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
    src: url('./JetBrains_fonte/static/JetBrainsMono-Regular.ttf');
  }
`;

// Styled Components
export const PresentationArea = styled.div`
  color: white;
  display: flex;
  border: 1px solid green;
`;

export const PresentationContainer = styled.div`
  border: 1px solid green;
  display: flex;
  flex-direction: column;
  margin-left: 180px;
  width: 500px;
  margin-top: 32px;
  height: 130px;
  justify-content: center;
`;

export const PresentationText = styled.div`
  font-family: 'JetBrains-Mono';
  font-size: 34px;
  border: 1px solid green;
  position: relative;
  padding: 0px;
`;

export const PresentationText2 = styled.div`
  font-family: 'JetBrains-Mono';
  font-size: 29px;
  border: 1px solid green;
  margin-top: 0px;
  position: relative;
`;

export const ContainerFotoPerfil = styled.div`
  border: 1px solid green;
  display: flex;
  align-items: center;
  margin-left: 15px;
  margin-top: 32px;
  height: 126px;
`;

export const FotoPerfil = styled.img`
  border-radius: 50%;
  width: 130px;
  height: 126px;
  position: relative;
`;

export const ContainerIcons = styled.div`
  border: 1px solid green;
  display: flex;
  height: 64px;
  width: 150px;
  align-items: center;
  justify-content: space-around;
  margin-left: 510px;
  margin-top: 40px;
`;

// Styled Components específicos para ícones
export const GitHubIconStyled = styled(GitHubIcon)`
  color: #FFFFFF;
  font-size: 36px;
  cursor: pointer;
  transition: box-shadow 0.4s ease-in-out !important;

  &:hover {
    box-shadow: 0px 4px 8px rgba(30, 241, 165, 0.7) !important;
`;

export const LinkedInIconStyled = styled(LinkedInIcon)`
  color: #FFFFFF;
  font-size: 36px;
  cursor: pointer;
  transition: box-shadow 0.4s ease-in-out !important;

  &:hover {
    box-shadow: 0px 4px 8px rgba(30, 241, 165, 0.7) !important;
  }
`;

export const InstagramIconStyled = styled(InstagramIcon)`
  color: #FFFFFF;
  font-size: 36px;
  cursor: pointer;
  transition: box-shadow 0.4s ease-in-out !important;

  &:hover {
    box-shadow: 0px 4px 8px rgba(30, 241, 165, 0.7) !important;
  }
`;


