import React, { useState } from "react";
import certificadoIFCE from '../../../images/certificado_IFCE.jpg';
import certificadoAWS from '../../../images/certificado_AWS.jpg';
import CertificadoHashtag from '../../../images/certificado_Hashtag.jpg';
import certificadoCearaCientifico from '../../../images/certificado_Ceara_Cientifico.jpg';
import CloseIcon from '@mui/icons-material/Close';
import {
    MainDiv,
    DivImage,
    DivDescription,
    AnimatedDiv,
    ParagraphDescription1,
    ColumnDiv,
    MaximizedImageContainer,
    CloseButton,
    TitleDiv,
    HorizontalDiv,
} from './certificatesStyle.js';

function Certificates() {
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
            <MainDiv as='section' id='Certificates' style={{ flexDirection: 'column', display: 'flex', justifyContent: 'space-evenly', textAlign:'center', alignItems:'center' }}>

                <TitleDiv>Certificates</TitleDiv>
                <HorizontalDiv>
                    <ColumnDiv>
                        <AnimatedDiv>
                            <DivImage>
                                <img
                                    onClick={() => handleImageClick(CertificadoHashtag)}
                                    src={CertificadoHashtag}
                                    style={{ width: '100px', borderRadius: '10px', border: '1px solid #1EF1A5B3' }}
                                    alt="Calculadora"
                                />
                            </DivImage>
                            <DivDescription className="description">
                                <ParagraphDescription1>Hashtag Certificate</ParagraphDescription1>
                            </DivDescription>
                        </AnimatedDiv>

                        <AnimatedDiv>
                            <DivImage>
                                <img
                                    onClick={() => handleImageClick(certificadoAWS)}
                                    src={certificadoAWS}
                                    style={{ width: '100px', borderRadius: '10px', border: '1px solid #1EF1A5B3' }}
                                    alt="Interface de Login"
                                />
                            </DivImage>
                            <DivDescription className="description">
                                <ParagraphDescription1>AWS Certificate</ParagraphDescription1>
                            </DivDescription>
                        </AnimatedDiv>
                    </ColumnDiv>

                    <ColumnDiv>
                        <AnimatedDiv>
                            <DivImage>
                                <img
                                    onClick={() => handleImageClick(certificadoIFCE)}
                                    src={certificadoIFCE}
                                    style={{ width: '100px', borderRadius: '10px', border: '1px solid #1EF1A5B3' }}
                                    alt="Chatbot Course Certificate"
                                />
                            </DivImage>
                            <DivDescription className="description">
                                <ParagraphDescription1>Chatbot Course Certificate</ParagraphDescription1>
                            </DivDescription>
                        </AnimatedDiv>

                        <AnimatedDiv>
                            <DivImage>
                                <img
                                    onClick={() => handleImageClick(certificadoCearaCientifico)}
                                    src={certificadoCearaCientifico}
                                    style={{ width: '100px', borderRadius: '10px', border: '1px solid #1EF1A5B3' }}
                                    alt="Science fair certificate"
                                />
                            </DivImage>
                            <DivDescription className="description">
                                <ParagraphDescription1>Science fair certificate</ParagraphDescription1>
                            </DivDescription>
                        </AnimatedDiv>
                    </ColumnDiv>
                </HorizontalDiv>
                
            </MainDiv>

            {maximizedImage && (
            <MaximizedImageContainer isClosing={isClosing}>
                <img src={maximizedImage} alt="Imagem Maximizada" />
                <CloseButton onClick={closeMaximizedImage}><CloseIcon /></CloseButton>
            </MaximizedImageContainer>
            )}  

        </>
    );
}

export default Certificates;
