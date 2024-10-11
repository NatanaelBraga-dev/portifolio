import React, { useRef, useEffect, useState } from "react";
import '../../../src/i18n.js';
import { useTranslation } from 'react-i18next';
import {
    SobreMimTabPanel,
    AboutMeContent,
    ExperienceContent,
} from './tabPanelStyle.js'

function AboutMe(){

    const { t } = useTranslation(); // Use o useTranslation para acessar as traduções

    return(
        
        <SobreMimTabPanel style={{flexDirection:'column'}}>
               
             <AboutMeContent>
                {t(
                    "My name is Natanael, I'm 17 years old and I love technology and innovation. I currently study full-time with an integrated Systems Development course Furthermore, I am interning at Tecla T, working on the development team."
                )}
             </AboutMeContent>
             
             <div style={{display:'flex', color: '#1EF1A5', textDecoration:'underline'}}>
              {t('Experience')}:
             </div>
             
             <ExperienceContent>
                {t(
                    "Furthermore, I have experience with technologies such as React.Js, Python, Javascript and PHP in addition to knowledge about code versioning tools and platforms such as Git, GitHub and GitLab. UI/UX designer skills using the Figma platform"
                )}
                <br></br>
                <br></br>
                {t(
                    "I also have a technical course in Systems Development and experience as a development intern at the company Tecla T."
                )}
             </ExperienceContent>
        </SobreMimTabPanel>
    )
}

export default AboutMe;