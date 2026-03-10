import Iconhtml from '../../../icons/Iconhtml.png';
import Iconcss from '../../../icons/Iconcss.png';
import Iconphp from '../../../icons/Iconphp.png';
import IconMysql from '../../../icons/mysql.png';
import Iconjs from '../../../icons/Iconjs.png';
import Iconreact from '../../../icons/Iconreact.png';
import Iconflutter from '../../../icons/Iconflutter.png'
import Icongithub from '../../../icons/Icongithub.png'
import Icongit from '../../../icons/Icongit.png'
import Iconfigma from '../../../icons/Iconfigma.png'
import Icondart from '../../../icons/Icondart.png'
import Iconpython from '../../../icons/Iconpython.png'
import {
    MainDiv,
    ContainerIcons,
    TechnologiesDiv,
    TitleDiv,
} from './technologiesStyle'

function Technologies(){
    return(
    <MainDiv as='section' id='Technologies'>
    <TitleDiv>Technologies</TitleDiv>
        <ContainerIcons>
            <TechnologiesDiv>
                <img src={Iconhtml} alt="HTML" style={{height:'50px' }}></img>
                <img src={Iconcss} alt="CSS" style={{height:'50px'}}></img>
                <img src={Iconjs} alt="JS" style={{height:'50px'}}></img>
                <img src={Iconphp} alt="PHP" style={{height:'50px'}}></img>
                <img src={IconMysql} alt="MySQL" style={{height:'50px'}}></img>
                <img src={Iconreact} alt="React" style={{height:'50px'}}></img>
            </TechnologiesDiv>
            <TechnologiesDiv>
                <img src={Iconpython} alt="Python" style={{height:'50px'}}></img>
                <img src={Icondart} alt="Dart" style={{height:'50px'}}></img>
                <img src={Iconfigma} alt="Figma" style={{height:'50px'}}></img>
                <img src={Iconflutter} alt="Flutter" style={{height:'50px'}}></img>
                <img src={Icongit} alt="Git" style={{height:'50px'}}></img>
                <img src={Icongithub} alt="Github" style={{height:'50px'}}></img>
            </TechnologiesDiv>
        </ContainerIcons>
    </MainDiv>
    )
}

export default Technologies;