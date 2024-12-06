import React, { useState } from "react";
import calculadora from '../../images/calculadora.png';
import print_tela_cadastro from '../../images/print_tela_cadastro.png';
import InterfaceLogin from '../../images/InterfaceLogin.png';
import {
    MainDiv,
    DivImage,
    DivDescription,
    AnimatedDiv,
    ParagraphDescription1,
    ColumnDiv,
    MaximizedImageContainer,
    CloseButton,
} from './certificatesTabStyle.js';

function CertificatesTab() {
    const [maximizedImage, setMaximizedImage] = useState(null);
    const [isClosing, setIsClosing] = useState(false);

    const handleImageClick = (imageSrc) => {
        setMaximizedImage(imageSrc);
        setIsClosing(false);
    };

    const closeMaximizedImage = () => {
        setIsClosing(true);
        setTimeout(() => setMaximizedImage(null), 300); // Duração igual à animação
    };

    return (
        <>
            <MainDiv style={{ backgroundColor: 'transparent', flexDirection: 'row', display: 'flex', justifyContent: 'space-evenly' }}>
                <ColumnDiv>
                    <AnimatedDiv>
                        <DivImage>
                            <img
                                onClick={() => handleImageClick(calculadora)}
                                src={calculadora}
                                style={{ width: '350px', borderRadius: '10px', border: '1px solid #1EF1A5B3' }}
                                alt="Calculadora"
                            />
                        </DivImage>
                        <DivDescription style={{ width: '370px', height: '70px', borderRadius: '10px' }} className="description">
                            <ParagraphDescription1>Projeto de uma calculadora simples</ParagraphDescription1>
                        </DivDescription>
                    </AnimatedDiv>

                    <AnimatedDiv>
                        <DivImage>
                            <img
                                onClick={() => handleImageClick(InterfaceLogin)}
                                src={InterfaceLogin}
                                style={{ width: '350px', borderRadius: '10px', border: '1px solid #1EF1A5B3', height: '198px' }}
                                alt="Interface de Login"
                            />
                        </DivImage>
                        <DivDescription style={{ width: '370px', height: '70px', borderRadius: '10px' }} className="description">
                            <ParagraphDescription1>Interface de Login</ParagraphDescription1>
                        </DivDescription>
                    </AnimatedDiv>
                </ColumnDiv>

                <ColumnDiv>
                    <AnimatedDiv>
                        <DivImage>
                            <img
                                onClick={() => handleImageClick(print_tela_cadastro)}
                                src={print_tela_cadastro}
                                style={{ width: '350px', borderRadius: '10px', border: '1px solid #1EF1A5B3' }}
                                alt="Cadastro e Login funcional"
                            />
                        </DivImage>
                        <DivDescription style={{ width: '370px', height: '70px', borderRadius: '10px' }} className="description">
                            <ParagraphDescription1>Cadastro e Login funcional</ParagraphDescription1>
                        </DivDescription>
                    </AnimatedDiv>

                    <AnimatedDiv>
                        <DivImage style={{ width: '350px', borderRadius: '10px', border: '1px solid #1EF1A5B3', height: '198px' }}>
                            <h1 style={{ paddingTop: '40px' }}>?</h1>
                        </DivImage>
                        <DivDescription style={{ width: '370px', height: '70px', borderRadius: '10px' }} className="description">
                            <ParagraphDescription1>Em construção...</ParagraphDescription1>
                        </DivDescription>
                    </AnimatedDiv>
                </ColumnDiv>
            </MainDiv>

            {/* Modal de Imagem Maximizada */}
            {maximizedImage && (
                <MaximizedImageContainer
                    style={isClosing ? { animation: 'fadeOut 0.3s ease-in-out forwards' } : {}}
                >
                    <img src={maximizedImage} alt="Imagem Maximizada" />
                    <CloseButton onClick={closeMaximizedImage}>X</CloseButton>
                </MaximizedImageContainer>
            )}
        </>
    );
}

export default CertificatesTab;
