import foto_perfil from '../../../images/foto_perfil.jpeg';
import { TypeAnimation } from 'react-type-animation';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import {
FotoPerfil,
ContainerFotoPerfil,
PresentationContainer,
PresentationText,
BodyContainer,
ContainerIcon,

} from './HomeStyle'

function HomeApp(){
    return(
       
        <BodyContainer id='Home' as='section' style={{height:'400px'}}>
             <ContainerFotoPerfil>
                <FotoPerfil src={foto_perfil}></FotoPerfil>
            </ContainerFotoPerfil>

            <PresentationContainer>
                <PresentationText>
                    <TypeAnimation
                    sequence={[
                        `Hi, My Name is Natanael\n I am a Fullstack Developer`,
                        8000,
                        "",
                    ]}
                    speed={50}
                    style={{
                         whiteSpace: 'pre-line', 
                         fontSize: '20px', 
                         color:'white', 
                         zIndex: 0,
                        }}
                    repeat={Infinity}
                    />
                </PresentationText>

            </PresentationContainer>
            <ContainerIcon>
                <ArrowDownwardIcon style={{fill: 'white', marginTop:'50px',width:'30px',height:'30px'}}/>
            </ContainerIcon>
        </BodyContainer>
    )
}

export default HomeApp;