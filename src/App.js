import './style.css';
import neymar from './images/neymar.jpg';
import github_icon from './icons/github_icon.png'
import Linkedin_icon from './icons/Linkedin_icon.png'
import instagram_icon from './icons/instagram_icon.png'
import React from "react";
import LabTabs, {Theme} from './components/interactive_window/janela_interativa';
import { ThemeProvider } from '@mui/material/styles';

function App() {
  return (
    <div id="App" className='div'>
        <div id="presentation-area" className='div'>
          <div id='presentation-container'>
            <p id="presentation-text">Hi! My name is Natanael</p>
            <p id='presentation-text-2'>I am a Fullstack Developer</p>
          </div>  
          <div id="container-fotoPerfil">
            <img src={neymar} alt="foto de perfil" id="fotoPerfil"></img>
          </div>
          <div id='container-icons'>
            <img src={github_icon} alt='icone do github' id='icon_github'></img>
            <img src={Linkedin_icon} alt='icone do Linkedin' id='icon_Linkedin'></img>
            <img src={instagram_icon} alt='icone do instagram' id='icon_instagram'></img>
          </div>
        </div>
      <ThemeProvider theme={Theme}> 
        <LabTabs/>
      </ThemeProvider>
    </div>
  );
}

export default App;