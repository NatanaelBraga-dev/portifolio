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

  // Animação de digitação
  const textRef1 = useRef(null);
  const textRef2 = useRef(null);

  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState('en');

  // Função de animação
  const runTypewriterAnimation = (text1, text2) => {
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

    // Reinicia a animação a cada 15 segundos
    setTimeout(() => runTypewriterAnimation(text1, text2), 15000);
  };

  // Efeito para controlar a animação
  useEffect(() => {
    const text1 = t("Hi! My name is Natanael");
    const text2 = t("I am a Fullstack Developer");

    runTypewriterAnimation(text1, text2);
  }, [t, language]); // Atualiza a animação quando a linguagem muda

  // Função da tradução da página
  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'pt' : 'en';
    i18n.changeLanguage(newLanguage);
    setLanguage(newLanguage);
  };

  // Hover do material translateIcon
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
          <a href="https://github.com/NatanaelBraga-dev" target="_blank" rel="noopener noreferrer"><GitHubIconStyled /></a>
          <a href="https://www.linkedin.com/in/natanael-braga-2149092b6/" target="_blank" rel="noopener noreferrer"> <LinkedInIconStyled /></a>
          <a href="https://www.instagram.com/natanaelbraga7/?next=%2F" target="_blank" rel="noopener noreferrer"> <InstagramIconStyled /></a>
        </ContainerIcons>
      </PresentationArea>

      <ThemeProvider theme={Theme}>
        <CenteredContainer>
          <LabTabs />
        </CenteredContainer>
      </ThemeProvider>

      <ContainerTranslation>
        <IconButton disableRipple>
          <TranslateIcon style={{
            color: 'white',
            border: '1px solid green',
            padding: '20px',
            backgroundColor: '#1EF1A5BF',
            borderRadius: '100px',
            transition: 'box-shadow 0.4s ease-in-out',
            boxShadow: hover ? ' 0px 0px 6px 8px rgba(30, 241, 165, 0.7)' : 'none',
          }}
            onClick={toggleLanguage}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}>
          </TranslateIcon>
        </IconButton>
      </ContainerTranslation>
    </DivApp>
  );
}

export default App;
