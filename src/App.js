import React, { useRef, useEffect,useState} from "react";
import gsap from "gsap";
import IconButton from '@mui/material/IconButton';
import './i18n'; // Importa o arquivo de configuração
import { useTranslation } from 'react-i18next';
import Stack from '@mui/material/Stack';
import TranslateIcon from '@mui/icons-material/Translate';
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
  containerTranslation,
} from './style.js';

function App() {
  const textRef1 = useRef(null);
  const textRef2 = useRef(null);

  useEffect(() => {
    const text1 = "Hi! My name is Natanael";
    const text2 = "I am a Fullstack Developer";

    const runTypewriterAnimation = () => {
      textRef1.current.innerHTML = "";
      textRef2.current.innerHTML = "";

      const splitText1 = text1.split("");
      const splitText2 = text2.split("");
      const tl = gsap.timeline();

      splitText1.forEach((char, i) => {
        const span = document.createElement("span");
        span.innerHTML = char;
        textRef1.current.appendChild(span);
        tl.fromTo(span, { opacity: 0 }, { opacity: 1, duration: 0.1 }, i * 0.1);
      });

      splitText2.forEach((char, i) => {
        const span = document.createElement("span");
        span.innerHTML = char;
        textRef2.current.appendChild(span);
        tl.fromTo(span, { opacity: 0 }, { opacity: 1, duration: 0.1 }, (splitText1.length * 0.1) + i * 0.1);
      });

      setTimeout(runTypewriterAnimation, 15000);
    };

    runTypewriterAnimation();
  }, []);

  const { t, i18n } = useTranslation(); // Hook para acessar a função de tradução
  const [language, setLanguage] = useState('en'); // Estado para controlar o idioma

  // Função para alternar o idioma
  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'pt' : 'en';
    i18n.changeLanguage(newLanguage);
    setLanguage(newLanguage);
  };

  return (
    <DivApp>
      <GlobalStyle /> 
      <PresentationArea>
        <ContainerFotoPerfil>
          <FotoPerfil src={foto_perfil} alt="foto de perfil" />
        </ContainerFotoPerfil>
        <PresentationContainer>
          <PresentationText ref={textRef1}>{ t('Hi! My name is Natanael') }</PresentationText> 
          <PresentationText2 ref={textRef2}>{ t('I am a Fullstack Developer')}</PresentationText2>
        </PresentationContainer>
        <ContainerIcons>
          <IconButton>

          </IconButton> 
          <GitHubIconStyled />
          <LinkedInIconStyled />
          <InstagramIconStyled />
        </ContainerIcons>
      </PresentationArea>

      <containerTranslation>
        <button onClick={toggleLanguage} style={{color: 'white'}}>
          {language === 'en' ? 'Switch to Português' : 'Switch to English'}
        </button>
      </containerTranslation>
      <ThemeProvider theme={Theme}> 
        <CenteredContainer>
          <LabTabs/>
        </CenteredContainer>
      </ThemeProvider>
    </DivApp>
  );
}

export default App;