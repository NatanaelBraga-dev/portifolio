// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          "Hi! My name is Natanael": "Hi! My name is Natanael",
          "description": "I am a Fullstack Developer"
        }
      },
      pt: {
        translation: {
          "Hi! My name is Natanael": "Olá! meu nome é Natanael",
          "I am a Fullstack Developer": "Eu sou um Desenvolvedor Fullstack"
        }
      }
    },
    lng: "en", // Idioma padrão
    fallbackLng: "en",
    interpolation: {
      escapeValue: false // React já escapa valores
    }
  });

export default i18n;
