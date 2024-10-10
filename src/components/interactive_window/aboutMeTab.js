import React, { useRef, useEffect, useState } from "react";
import '../../../src/i18n.js';
import { useTranslation } from 'react-i18next';
import {
    SobreMimTabPanel,
    AboutMeContent,
    ExperienceContent,
} from './tabPanelStyle.js'

function AboutMe(){
    return(
        
        <SobreMimTabPanel style={{flexDirection:'column'}}>
               
             <AboutMeContent>
                My name is Nathanael, I'm 17 years old and I love technology and innovation.
                I currently study full-time with an integrated Systems Development course, 
                Furthermore, I am interning at Tecla T, working on the development team
             </AboutMeContent>
             
             <div style={{color: '#1EF1A5', textDecoration: 'underline', display: 'flex'}}>
                Experience:
             </div>
             
             <ExperienceContent>
                Furthermore, I have experience with technologies such as React.Js, Python, Javascript and PHP as well as knowledge
                about code checking tools and platforms such as Git, GitHub and GitLab.
                <br></br>
                I also have a technical course in Systems Development and also experience as an intern at the company
                Tecla T
             </ExperienceContent>
        </SobreMimTabPanel>
    )
}

export default AboutMe;