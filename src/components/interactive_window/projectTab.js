import React from "react";
import '../../../src/i18n.js';
import { useTranslation } from 'react-i18next';
import calculadora from '../../images/calculadora.png'
import print_tela_cadastro from '../../images/print_tela_cadastro.png'
import {
    MainDiv,
    DivImage,
    DivDescription,
    IconsProject1,
    AnimatedDiv,
    ParagraphDescription1,
} from './projectTabStyle.js'

function ProjectTab() {
    const { t } = useTranslation(); // Use o useTranslation para acessar as traduções

    return (
        <MainDiv style={{backgroundColor: 'transparent', flexDirection:'row', display:'flex', justifyContent:'space-evenly'}}>

            <AnimatedDiv>
                <DivImage>
                    <img src={calculadora} style={{width:'350px', borderRadius:'10px', border: '1px solid #1EF1A5B3'}}></img>
                </DivImage>

                <DivDescription style={{width:'370px', height: '70px', borderRadius:'10px'}} className="description">
                    <ParagraphDescription1>
                        Projeto de uma calculadora simples 
                    </ParagraphDescription1>
                </DivDescription>
            </AnimatedDiv>

            <AnimatedDiv>
                <DivImage> 
                    <img src={print_tela_cadastro} style={{width:'350px', borderRadius:'10px',border: '1px solid #1EF1A5B3'}}></img>
                </DivImage>
                <DivDescription style={{width:'370px', height: '70px', borderRadius:'10px'}} className="description">
                    <ParagraphDescription1>
                        Cadastro e Login funcional
                    </ParagraphDescription1>
                </DivDescription>
            </AnimatedDiv>
            
        </MainDiv>
    );
}

export default ProjectTab;
