import React from "react";
import {
    SobreMimTabPanel,
    AboutMeContent,
    ExperienceContent,
} from './tabPanelStyle.js';

function AboutMe() {
     // Use o useTranslation para acessar as traduções

    return (
        <SobreMimTabPanel style={{ flexDirection: 'column' }}>
            <div style={{ display: 'flex', color: '#1EF1A5', textDecoration: 'underline' }}>
                About me:
            </div>
            <AboutMeContent>
                <div>
                 My name is Nathanael, and even before becoming a developer, I was already passionate about technology
                 and innovation. I am currently 17 years old and constantly staying updated with technological news.
                 Additionally, I am always learning something new to continually elevate my level as a professional.
                </div>
            </AboutMeContent>

            <div style={{ display: 'flex', color: '#1EF1A5', textDecoration: 'underline', marginTop: '15px' }}>
                Experience:
            </div>
            <ExperienceContent>
                <div>
                    
                    As an experience, it is worth mentioning that my curriculum includes a technical course in 
                    Systems Development, taken together with high school. Furthermore, I have experience in the area, 
                    having worked as an intern for 5 months at the company Tecla T, and also from developing solo and group projects.
                
                </div>
                <div style={{ marginTop: '15px' }}>
                    
                During my time in the development area, I accumulated knowledge in several technologies, 
                such as Python, JavaScript, React.js, MySQL, Git, GitHub, HTML, CSS, among others.
                    
                </div>
            </ExperienceContent>
        </SobreMimTabPanel>
    );
}

export default AboutMe;
