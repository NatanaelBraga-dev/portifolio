  import React from "react";
  import foto_perfil from './images/foto_perfil.jpeg';
  import LabTabs, { Theme } from './components/interactive_window/janela_interativa';
  import { ThemeProvider } from '@mui/material/styles'; 
  import { 
    DivApp,
    GlobalStyle, 
    PresentationArea, 
    PresentationContainer, 
    PresentationText, 
    PresentationText2, 
    ContainerFotoPerfil, 
    FotoPerfil, 
    ContainerIcons, 
    GitHubIconStyled, 
    LinkedInIconStyled, 
    InstagramIconStyled,
    CenteredContainer,

  } from './style.js';

  function App() {
    return (
      <DivApp>
        <GlobalStyle /> 
        <PresentationArea>
          <ContainerFotoPerfil>
            <FotoPerfil src={foto_perfil} alt="foto de perfil" />
          </ContainerFotoPerfil>
          <PresentationContainer>
            <PresentationText>Hi! My name is Natanael</PresentationText>
            <PresentationText2>I am a Fullstack Developer</PresentationText2>
          </PresentationContainer> 
          <ContainerIcons>
            <GitHubIconStyled />
            <LinkedInIconStyled />
            <InstagramIconStyled />
          </ContainerIcons>
        </PresentationArea>

        {/* Contêiner centralizado apenas para o LabTabs (CenteredContainer) */}
        <ThemeProvider theme={Theme}> 
          <CenteredContainer>
            <LabTabs/>
          </CenteredContainer>
        </ThemeProvider>
      </DivApp>
    );
  }

  export default App;
