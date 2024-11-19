import React from "react";
import '../../../src/i18n.js';
import { useTranslation } from 'react-i18next';
import calculadora from '../../images/calculadora.png'
import {
    MainDiv,
    DivImage1,
    DivDescription1,
    IconsProject1,
    AnimatedDiv,
    ParagraphDescription1,
} from './projectTabStyle.js'

function ProjectTab() {
    const { t } = useTranslation(); // Use o useTranslation para acessar as traduções

    return (
        <MainDiv style={{backgroundColor: 'transparent'}}>
            <AnimatedDiv>
                <DivImage1>
                    <img src={calculadora} style={{width:'350px', borderRadius:'10px',boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.3)' }}></img>
                </DivImage1>

                <DivDescription1 style={{width:'370px', height: '70px', borderRadius:'10px'}}>
                    <ParagraphDescription1>
                        Projeto de uma calculadora simples 
                    </ParagraphDescription1>
                </DivDescription1>
            </AnimatedDiv>

        </MainDiv>
    );
}

export default ProjectTab;
