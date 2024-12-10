import React, { useEffect, useState } from "react";
import foto_perfil from './images/foto_perfil.jpeg';
import LabTabs, { Theme } from './components/interactive_window/janela_interativa';
import { ThemeProvider } from '@mui/material/styles';
import Circle from './images/Ellipse.png'
import { TypeAnimation } from 'react-type-animation';
import {
  DivApp, 
  GlobalStyle,
  PresentationArea,
  PresentationContainer,
  PresentationText,
  ContainerFotoPerfil,
  FotoPerfil,
  ContainerIcons,
  GitHubIconStyled,
  LinkedInIconStyled,
  InstagramIconStyled,
  CenteredContainer,
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
  
  return (
    <DivApp>
      <GlobalStyle />
      <PresentationArea>
        <ContainerFotoPerfil>
          <FotoPerfil src={foto_perfil} alt="foto de perfil" />
        </ContainerFotoPerfil>
        <PresentationContainer>
          <PresentationText>
            <TypeAnimation
              sequence={[
                `Hi, My Name is Natanael\nI'm a Fullstack Developer`,
                  8000,
                  "",
                ]}
                speed={50}
                style={{ whiteSpace: 'pre-line', fontSize: '36px', }}
                repeat={Infinity}
              />
          </PresentationText>
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
    </DivApp>
  );
}

export default App;