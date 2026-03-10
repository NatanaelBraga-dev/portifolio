import React from "react";
import Iconhtml from '../../icons/Iconhtml.png'
import Iconcss from '../../icons/Iconcss.png'
import Iconphp from '../../icons/Iconphp.png'
import IconMysql from '../../icons/mysql.png'
import Iconjs from '../../icons/Iconjs.png'
import Iconpython from '../../icons/Iconpython.png'
import Iconreact from '../../icons/Iconreact.png'
import Iconflutter from '../../icons/Iconflutter.png'
import Icongithub from '../../icons/Icongithub.png'
import Icongit from '../../icons/Icongit.png'
import Iconfigma from '../../icons/Iconfigma.png'
import Icondart from '../../icons/Icondart.png'

import{
    MainDiv,
    TechnologiesDiv,
    ContainerIcons,
} from './technologiesTabStyle.js'

function TecnologiesTab(){
    return(
        <MainDiv>
            <ContainerIcons>
                <TechnologiesDiv>
                    <img src={Iconhtml} alt="HTML" style={{height:'60px'}} />
                    <img src={Iconcss} alt="CSS" style={{height:'60px'}} />
                    <img src={Iconjs} alt="JavaScript" style={{height:'60px'}} />
                    <img src={Iconphp} alt="PHP" style={{height:'70px'}} />
                    <img src={IconMysql} alt="MySQL" style={{height:'64px'}} />
                    <img src={Iconreact} alt="React" style={{height:'60px'}} />
                </TechnologiesDiv>
                
                <TechnologiesDiv>
                    <img src={Iconpython} alt="Python" style={{height:'60px'}} />
                    <img src={Icondart} alt="Dart" style={{height:'60px'}} />
                    <img src={Iconfigma} alt="Figma" style={{height:'60px'}} />
                    <img src={Iconflutter} alt="Flutter" style={{height:'60px'}} />
                    <img src={Icongit} alt="Git" style={{height:'60px'}} />
                    <img src={Icongithub} alt="GitHub" style={{height:'60px'}} />
                </TechnologiesDiv>
            </ContainerIcons>
        </MainDiv>
    );
}

export default TecnologiesTab;