import React, { useEffect, useState } from "react";
import foto_perfil from './images/foto_perfil.jpeg';
import LabTabs, { Theme } from './components/interactive_window/janela_interativa';
import { ThemeProvider } from '@mui/material/styles';
import Circle from './images/Ellipse.png';
import { TypeAnimation } from 'react-type-animation';
import AnchorTemporaryDrawer from "./components/drawer_component/drawerComponent.js";
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
  DivAppMobile,
} from './style.js';

function CircleDivTest({ rotation }) {
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setScreenHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const baseStyle = {
    position: "absolute",
    width: "fit-content",
    zIndex: 0,
    transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
    backgroundColor: "transparent",
    transition: "transform 1s ease-in-out",
  };

  const isNotebookLayout = screenHeight <= 768;

  const dynamicStyle = isNotebookLayout
    ? { left: "88%", top: "40%" }
    : { left: "89.5%", top: "29%" };

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
  const [currentTab, setCurrentTab] = React.useState('1');
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const handleTabChange = (newValue) => {
    const nextTab = parseInt(newValue, 10);
    const currentTabNum = parseInt(currentTab, 10);

    if (nextTab > currentTabNum) {
      setRotation((prevRotation) => prevRotation + 360);
    } else if (nextTab < currentTabNum) {
      setRotation((prevRotation) => prevRotation - 360);
    }

    setCurrentTab(newValue);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isMobile) {
    // Layout específico para dispositivos móveis
    return (

        <DivAppMobile>
          <AnchorTemporaryDrawer>
          
          </AnchorTemporaryDrawer>
        </DivAppMobile>
    
    );
  }

  // Layout original para outras resoluções
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
              style={{ whiteSpace: 'pre-line', fontSize: '36px' }}
              repeat={Infinity}
            />
          </PresentationText>
        </PresentationContainer>
        <ContainerIcons>
          <a href="https://github.com/NatanaelBraga-dev" target="_blank" rel="noopener noreferrer"><GitHubIconStyled /></a>
          <a href="https://www.linkedin.com/in/natanael-braga-2149092b6/" target="_blank" rel="noopener noreferrer"><LinkedInIconStyled /></a>
          <a href="https://www.instagram.com/natanaelbraga7/?next=%2F" target="_blank" rel="noopener noreferrer"><InstagramIconStyled /></a>
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
