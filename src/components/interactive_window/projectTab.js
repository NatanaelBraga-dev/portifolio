import React from "react";
import '../../../src/i18n.js';
import { useTranslation } from 'react-i18next';
import {
    MainDiv,
} from './projectTabStyle.js'

function ProjectTab(){

    const { t } = useTranslation(); // Use o useTranslation para acessar as traduções

    return(
        <MainDiv>

        </MainDiv>

    )
}

export default ProjectTab