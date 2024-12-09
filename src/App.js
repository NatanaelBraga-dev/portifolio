import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import IconButton from '@mui/material/IconButton';
import './i18n';
import { useTranslation } from 'react-i18next';
import TranslateIcon from '@mui/icons-material/Translate';
import foto_perfil from './images/foto_perfil.jpeg';
import LabTabs, { Theme } from './components/interactive_window/janela_interativa';
import { ThemeProvider } from '@mui/material/styles';
import Circle from './images/Ellipse.png'
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

function CircleDivTest({ rotation }) {
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);

  // Atualiza o estado quando o tamanho da janela muda
  useEffect(() => {
    const handleResize = () => {
      setScreenHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Define os estilos base
  const baseStyle = {
    position: "absolute",
    width: "fit-content",
    zIndex: 0,
    transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
    backgroundColor: "transparent",
    transition: "transform 1s ease-in-out",
  };

  // Ajusta dinamicamente posição e tamanho com base no estado
  const isNotebookLayout = screenHeight <= 768;

  const dynamicStyle = isNotebookLayout
    ? { left: "88%", top: "40%" } // Layout para notebooks
    : { left: "89.5%", top: "29%" }; // Layout para monitores

  const imageStyle = {
    height: isNotebookLayout ? "220px" : "260px",
    width: isNotebookLayout ? "220px" : "260px",
  };

  const divStyle = { ...baseStyle, ...dynamicStyle };

  return (
    <div style={divStyle}>
      <img src={Circle} alt="Circle" style={imageStyle} />
    </div>
  );
}

function App() {
  const [rotation, setRotation] = React.useState(0);
  const [currentTab, setCurrentTab] = React.useState('1'); // Inicialize com o valor inicial da aba

  const handleTabChange = (newValue) => {
    const nextTab = parseInt(newValue, 10); // Certifique-se de que estamos lidando com números
    const currentTabNum = parseInt(currentTab, 10);

    // Determine a direção da rotação
    if (nextTab > currentTabNum) {
      // Sentido horário
      setRotation((prevRotation) => prevRotation + 360);
    } else if (nextTab < currentTabNum) {
      // Sentido anti-horário
      setRotation((prevRotation) => prevRotation - 360);
    }

    // Atualize o tab atual
    setCurrentTab(newValue);
  };
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

      <CircleDivTest rotation={rotation}>
      </CircleDivTest>

      <ThemeProvider theme={Theme}>
        <CenteredContainer>
          <LabTabs onTabChange={handleTabChange}/>
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
