import calculadora from '../../../images/calculadora.png';
import print_tela_cadastro from '../../../images/print_tela_cadastro.png';
import InterfaceLogin from '../../../images/InterfaceLogin.png';
import Iconhtml from '../../../icons/Iconhtml.png';
import Iconcss from '../../../icons/Iconcss.png';
import Iconphp from '../../../icons/Iconphp.png';
import IconMysql from '../../../icons/mysql.png';
import Iconjs from '../../../icons/Iconjs.png';
import Iconreact from '../../../icons/Iconreact.png';
import {
    MainDiv,
    AnimatedDiv,
    ColumnDiv,
    DivImage,
    DivDescription,
    ParagraphDescription1,
    TechnologiesIconsDiv,
    TitleDiv,
    HorizontalDiv,
    ContainerEmptyDiv,
    ParagraphDescription2,
} from './ProjectsStyle.js';

function ProjectsMobile() {
    return (
        <MainDiv as='section' id='Projects'>
            <TitleDiv>Projects</TitleDiv>   
            <HorizontalDiv>
            <ColumnDiv>
                <AnimatedDiv>
                    <DivImage>
                        <img
                            onClick={() =>
                                window.location.href =
                                    'https://github.com/NatanaelBraga-dev/Calculadora'
                            }
                            src={calculadora}
                            alt="Calculadora"
                            style={{width:'140px', borderRadius:'10px', border: '1px solid #1EF1A5B3'}}
                        />
                    </DivImage>
                    <DivDescription className="description">
                        <ParagraphDescription1>Simple calculator software</ParagraphDescription1>
                        <TechnologiesIconsDiv>
                            <img src={Iconhtml} style={{height:'20px'}}></img>
                            <img src={Iconcss} style={{height:'20px'}}></img>
                            <img src={Iconjs} style={{height:'20px'}}></img>
                        </TechnologiesIconsDiv>
                    </DivDescription>
                </AnimatedDiv>

                <AnimatedDiv>
                    <DivImage>
                        <img
                            onClick={() =>
                                window.location.href ='https://github.com/NatanaelBraga-dev/interface-de-Login-com-React.Js'
                            }
                            src={InterfaceLogin}
                            alt="Calculadora"
                            style={{width:'140px', borderRadius:'10px', border: '1px solid #1EF1A5B3'}}
                        />
                    </DivImage>
                    <DivDescription className="description">
                        <ParagraphDescription1>Login Interface</ParagraphDescription1>
                        <TechnologiesIconsDiv>
                            <img src={Iconreact} style={{height:'20px'}}></img>
                            <img src={Iconcss} style={{height:'20px'}}></img>
                        </TechnologiesIconsDiv>
                    </DivDescription>
                </AnimatedDiv>
            </ColumnDiv> 

            <ColumnDiv>
                <AnimatedDiv>
                    <DivImage>
                        <img
                            onClick={() =>
                                window.location.href ='https://github.com/NatanaelBraga-dev/Cadastro-e-Login-funcional'
                            }
                            src={print_tela_cadastro}
                            alt="Calculadora"
                            style={{width:'140px', borderRadius:'10px', border: '1px solid #1EF1A5B3'}}
                        />
                    </DivImage>
                    <DivDescription className="description">
                        <ParagraphDescription1>registration and functional login</ParagraphDescription1>
                        <TechnologiesIconsDiv>
                            <img src={Iconhtml} style={{height:'20px'}}></img>
                            <img src={Iconcss} style={{height:'20px'}}></img>
                            <img src={Iconphp} style={{height:'20px'}}></img>
                            <img src={IconMysql} style={{height:'20px'}}></img>
                        </TechnologiesIconsDiv>
                    </DivDescription>
                </AnimatedDiv>

                <ContainerEmptyDiv>
                    <DivImage style={{
                        height:'fit-content',
                        width: 'fit-content',
                        borderRadius:'10px',
                        border: '1px solid #1EF1A5B3',
                        display:'flex', 
                        justifyContent:'center',
                        alignItems:'center',
                        }}> 
                    <div style={{width:'144px', height:'84px', display:'flex', textAlign:'center', flexDirection:'column'}}>
                       <h1>?</h1>
                   </div>
                    </DivImage>
                    <DivDescription className="description">
                        <ParagraphDescription2>
                            developing...
                        </ParagraphDescription2>
                        <TechnologiesIconsDiv>
                            <img src={Iconreact} style={{height:'20px'}}></img>
                        </TechnologiesIconsDiv>                    
                    </DivDescription>
                </ContainerEmptyDiv>
            </ColumnDiv>        
            </HorizontalDiv> 
        </MainDiv>
    );
}

export default ProjectsMobile;
