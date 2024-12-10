import React from "react";
import { useTranslation } from 'react-i18next';
import calculadora from '../../images/calculadora.png'
import print_tela_cadastro from '../../images/print_tela_cadastro.png'
import InterfaceLogin from '../../images/InterfaceLogin.png'
import Iconhtml from '../../icons/Iconhtml.png'
import Iconcss from '../../icons/Iconcss.png'
import Iconphp from '../../icons/Iconphp.png'
import IconMysql from '../../icons/mysql.png'
import Iconjs from '../../icons/Iconjs.png'
import Iconreact from '../../icons/Iconreact.png'
import {
    MainDiv,
    DivImage,
    DivDescription,
    AnimatedDiv,
    ParagraphDescription1,
    TechnologiesIconsDiv,
    ColumnDiv,
} from './projectTabStyle.js'

function ProjectTab() {

    return (
        <MainDiv style={{backgroundColor: 'transparent', flexDirection:'row', display:'flex', justifyContent:'space-evenly'}}>
            <ColumnDiv>
                <AnimatedDiv>
                    <DivImage>
                        <img onClick={() => window.location.href = "https://github.com/NatanaelBraga-dev/Calculadora"} src={calculadora} style={{width:'350px', borderRadius:'10px', border: '1px solid #1EF1A5B3'}}></img>
                    </DivImage>

                    <DivDescription style={{width:'370px', height: '70px', borderRadius:'10px'}} className="description">
                        <ParagraphDescription1>    
                        simple calculator software 
                        </ParagraphDescription1>
                        <TechnologiesIconsDiv>
                            <img src={Iconhtml} style={{height:'24px'}}></img>
                            <img src={Iconcss} style={{height:'24px'}}></img>
                            <img src={Iconjs} style={{height:'24px'}}></img>
                        </TechnologiesIconsDiv>
                    </DivDescription>
                </AnimatedDiv>

                <AnimatedDiv>
                    <DivImage>
                        <img onClick={() => window.location.href = "https://github.com/NatanaelBraga-dev/interface-de-Login-com-React.Js"} src={InterfaceLogin} style={{width:'350px', borderRadius:'10px', border: '1px solid #1EF1A5B3', height: '198px'}} ></img>
                    </DivImage>

                    <DivDescription style={{width:'370px', height: '70px', borderRadius:'10px'}} className="description">
                        <ParagraphDescription1>
                            login interface
                        </ParagraphDescription1>
                        <TechnologiesIconsDiv>
                            <img src={Iconreact} style={{height:'24px'}}></img>
                            <img src={Iconcss} style={{height:'24px'}}></img>
                        </TechnologiesIconsDiv>
                    </DivDescription>
                </AnimatedDiv>
            </ColumnDiv>
            
            <ColumnDiv>
            <AnimatedDiv>
                <DivImage> 
                    <img onClick={() => window.location.href = "https://github.com/NatanaelBraga-dev/Cadastro-e-Login-funcional"} src={print_tela_cadastro} style={{width:'350px', borderRadius:'10px',border: '1px solid #1EF1A5B3'}}></img>
                </DivImage>
                <DivDescription style={{width:'370px', height: '70px', borderRadius:'10px'}} className="description">
                    <ParagraphDescription1>
                        registration and functional login
                    </ParagraphDescription1>
                    <TechnologiesIconsDiv>
                        <img src={Iconhtml} style={{height:'24px'}}></img>
                        <img src={Iconcss} style={{height:'24px'}}></img>
                        <img src={Iconphp} style={{height:'34px'}}></img>
                        <img src={IconMysql} style={{height:'28px'}}></img>
                    </TechnologiesIconsDiv>                    
                </DivDescription>
            </AnimatedDiv>

                <AnimatedDiv>
                    <DivImage style={{width:'350px', borderRadius:'10px',border: '1px solid #1EF1A5B3', height:'198px'}}> 
                            <h1 style={{paddingTop:'40px'}}>?</h1>
                    </DivImage>
                    <DivDescription style={{width:'370px', height: '70px', borderRadius:'10px'}} className="description">
                        <ParagraphDescription1>
                            developing...
                        </ParagraphDescription1>
                        <TechnologiesIconsDiv>
                            <img src={Iconreact} style={{height:'24px'}}></img>
                        </TechnologiesIconsDiv>                    
                    </DivDescription>
                </AnimatedDiv>     
            </ColumnDiv>
           

        </MainDiv>
    );
}

export default ProjectTab;
