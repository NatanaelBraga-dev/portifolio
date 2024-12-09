import React from "react";
import '../../../src/i18n.js';
import { useTranslation } from 'react-i18next';
import {
    SobreMimTabPanel,
    AboutMeContent,
    ExperienceContent,
} from './tabPanelStyle.js';

function AboutMe() {
    const { t } = useTranslation(); // Use o useTranslation para acessar as traduções

    return (
        <SobreMimTabPanel style={{ flexDirection: 'column' }}>
            <div style={{ display: 'flex', color: '#1EF1A5', textDecoration: 'underline' }}>
                {t('About me:')}
            </div>
            <AboutMeContent>
                <div>
                    {t(
                        "My name is Natanael, I'm 17 years old and I love technology and innovation. I currently study full-time with an integrated Systems Development course Furthermore, I am interning at Tecla T, working on the development team."
                    )}
                </div>
            </AboutMeContent>

            <div style={{ display: 'flex', color: '#1EF1A5', textDecoration: 'underline', marginTop: '15px' }}>
                {t('Experience')}:
            </div>
            <ExperienceContent>
                <div>
                    {t(
                        "Furthermore, I have experience with technologies such as React.Js, Python, Javascript and PHP in addition to knowledge about code versioning tools and platforms such as Git, GitHub and GitLab. UI/UX designer skills using the Figma platform"
                    )}
                </div>
                <div style={{ marginTop: '15px' }}>
                    {t(
                        "I also have a technical course in Systems Development and experience as a development intern at the company Tecla T."
                    )}
                </div>
            </ExperienceContent>
        </SobreMimTabPanel>
    );
}

export default AboutMe;
