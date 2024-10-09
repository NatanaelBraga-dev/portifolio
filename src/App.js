import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import IconButton from '@mui/material/IconButton';
import './i18n';
import { useTranslation } from 'react-i18next';
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
  ContainerTranslation,
} from './style.js';

function App() {

  //animação de digitação
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

  //função da tradução da página
  const { t, i18n } = useTranslation(); 
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'pt' : 'en';
    i18n.changeLanguage(newLanguage);
    setLanguage(newLanguage);
  };

  
  //hover do material translateIcon
  const [hover, setHover] = useState(false);

  return (
    <DivApp>
      <GlobalStyle />
      <PresentationArea>
        <ContainerFotoPerfil>
          <FotoPerfil src={foto_perfil} alt="foto de perfil" />
        </ContainerFotoPerfil>
        <PresentationContainer>
          <PresentationText ref={textRef1}>{t('Hi! My name is Natanael')}</PresentationText>
          <PresentationText2 ref={textRef2}>{t('I am a Fullstack Developer')}</PresentationText2>
        </PresentationContainer>
        <ContainerIcons>
          <GitHubIconStyled />
          <LinkedInIconStyled />
          <InstagramIconStyled />
        </ContainerIcons>
      </PresentationArea>

      <ThemeProvider theme={Theme}>
        <CenteredContainer>
          <LabTabs />
        </CenteredContainer>
      </ThemeProvider>

      <ContainerTranslation>
        <IconButton disableRipple >
          <TranslateIcon style={{
            color: 'white', 
            border: '1px solid green', 
            padding:'20px', 
            backgroundColor: '#1EF1A5BF',
            borderRadius:'100px',
            transition: 'box-shadow 0.4s ease-in-out',
            boxShadow: hover ? ' 0px 0px 6px 8px rgba(30, 241, 165, 0.7)' : 'none',
          }} 
            onClick={toggleLanguage}
            onMouseEnter={() => setHover(true)} 
            onMouseLeave={() => setHover(false)} >
          </TranslateIcon>
        </IconButton>
      </ContainerTranslation>

    </DivApp>
  );
}

export default App;