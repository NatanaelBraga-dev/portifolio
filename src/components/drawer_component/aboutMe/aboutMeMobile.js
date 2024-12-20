import {
    ContainerAboutMe,
    TextContainer,
    PresentationContainer,
    DescriptionContainer,
} from './aboutMeMobileStyle'

function AboutMeMobile(){
    return(
        <ContainerAboutMe id="AboutMe" as='section' >
            <TextContainer>
                
                <PresentationContainer>
                    {"Hi, My name is"}
                </PresentationContainer>
                <PresentationContainer>
                    Natanael
                </PresentationContainer>

                <DescriptionContainer>
                    {"I started studying programming when I was 15 years old when I entered high school,"} 
                    {"through a systems development course"}
                </DescriptionContainer>

                <DescriptionContainer>
                    {"I already have 5 months of experience in the programming job market"}
                    {"when I had the opportunity to work as a development intern at the company Tecla T"}
                </DescriptionContainer>
                
                <DescriptionContainer>
                    {"I am currently looking for an opportunity to re-enter the job market as a fullstack developer"}    
                </DescriptionContainer>

            </TextContainer>
        </ContainerAboutMe>
    )
}

export default AboutMeMobile