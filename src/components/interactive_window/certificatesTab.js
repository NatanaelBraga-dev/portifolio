import React, { useState } from "react";
import certificadoIFCE from '../../images/certificado_IFCE.jpg'
import certificadoAWS from '../../images/certificado_AWS.jpg'
import CertificadoHashtag from '../../images/certificado_Hashtag.jpg'
import certificadoCearaCientifico from '../../images/certificado_Ceara_Cientifico.jpg'
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
                                onClick={() => handleImageClick(CertificadoHashtag)}
                                src={CertificadoHashtag}
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
                                onClick={() => handleImageClick(certificadoAWS)}
                                src={certificadoAWS}
                                style={{ width: '350px', borderRadius: '10px', border: '1px solid #1EF1A5B3' }}
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
                                onClick={() => handleImageClick(certificadoIFCE)}
                                src={certificadoIFCE}
                                style={{ width: '350px', borderRadius: '10px', border: '1px solid #1EF1A5B3', height:'272px' }}
                                alt="Cadastro e Login funcional"
                            />
                        </DivImage>
                        <DivDescription style={{ width: '370px', height: '70px', borderRadius: '10px' }} className="description">
                            <ParagraphDescription1>Cadastro e Login funcional</ParagraphDescription1>
                        </DivDescription>
                    </AnimatedDiv>

                    <AnimatedDiv>
                    <DivImage>
                            <img
                                onClick={() => handleImageClick(certificadoCearaCientifico)}
                                src={certificadoCearaCientifico}
                                style={{ width: '350px', borderRadius: '10px', border: '1px solid #1EF1A5B3', height:'272px' }}
                                alt="Cadastro e Login funcional"
                            />
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
