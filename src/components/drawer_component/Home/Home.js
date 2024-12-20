import foto_perfil from '../../../images/foto_perfil.jpeg';
import { TypeAnimation } from 'react-type-animation';
import {
FotoPerfil,
ContainerFotoPerfil,
PresentationContainer,
PresentationText,
BodyContainer,

} from './HomeStyle'

function HomeApp(){
    return(
       

        <BodyContainer>
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
                        
                        }}
                    repeat={Infinity}
                    />
                </PresentationText>

            </PresentationContainer>
        </BodyContainer>
    
    )
}

export default HomeApp;