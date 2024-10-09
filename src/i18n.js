import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          "Hi! My name is Natanael": "Hi! My name is Natanael",
          "I am a Fullstack Developer": "I am a Fullstack Developer",
          "About": "About",
          "Projects": "Projects",
          "Technologies": "Technologies",
          "Certificates": "Certificates",
          "About me:": "About me:",
        }
      },
      pt: {
        translation: {
          "Hi! My name is Natanael": "Olá! Meu nome é Natanael",
          "I am a Fullstack Developer": "Eu sou um Desenvolvedor Fullstack",
          "About": "Sobre",
          "Projects": "Projetos",
          "Technologies": "Tecnologias",
          "Certificates": "Certificados",
          "About me:": "Sobre mim",
        }
      }
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false // React já escapa valores
    }
  });

export default i18n;
