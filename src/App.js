import React from "react";
import neymar from './images/neymar.jpg';
import LabTabs, { Theme } from './components/interactive_window/janela_interativa';
import { ThemeProvider } from '@mui/material/styles'; 
import { 
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
  InstagramIconStyled 
} from './style.js';

function App() {
  return (
    <div id="App" className='div'>
      <GlobalStyle /> 
      <PresentationArea>
        <PresentationContainer>
          <PresentationText>Hi My name is Natanael</PresentationText>
          <PresentationText2>I am a Fullstack Developer</PresentationText2>
        </PresentationContainer>  
        <ContainerFotoPerfil>
          <FotoPerfil src={neymar} alt="foto de perfil" />
        </ContainerFotoPerfil>
        <ContainerIcons>
          <GitHubIconStyled />
          <LinkedInIconStyled />
          <InstagramIconStyled />
        </ContainerIcons>
      </PresentationArea>
      <ThemeProvider theme={Theme}> 
        <LabTabs/>
      </ThemeProvider>
    </div>
  );
}

export default App;
