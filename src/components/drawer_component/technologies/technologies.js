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
                <img src={Iconhtml} style={{height:'50px' }}></img>
                <img src={Iconcss} style={{height:'50px'}}></img>
                <img src={Iconjs} style={{height:'50px'}}></img>
                <img src={Iconphp} style={{height:'50px'}}></img>
                <img src={IconMysql} style={{height:'50px'}}></img>
                <img src={Iconreact} style={{height:'50px'}}></img>
            </TechnologiesDiv>
            <TechnologiesDiv>
                <img src={Iconpython} style={{height:'50px'}}></img>
                <img src={Icondart} style={{height:'50px'}}></img>
                <img src={Iconfigma} style={{height:'50px'}}></img>
                <img src={Iconflutter} style={{height:'50px'}}></img>
                <img src={Icongit} style={{height:'50px'}}></img>
                <img src={Icongithub} style={{height:'50px'}}></img>
            </TechnologiesDiv>
        </ContainerIcons>
    </MainDiv>
    )
}

export default Technologies;