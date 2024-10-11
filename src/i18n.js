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
          "Experience": "Experience",
          "My name is Natanael, I'm 17 years old and I love technology and innovation. I currently study full-time with an integrated Systems Development course Furthermore, I am interning at Tecla T, working on the development t eam.": "My name is Natanael, I'm 17 years old and I love technology and innovation. I currently study full-time with an integrated Systems Development course Furthermore, I am interning at Tecla T, working on the development team.",
          "Furthermore, I have experience with technologies such as React.Js, Python, Javascript and PHP in addition to knowledge about code versioning tools and platforms such as Git, GitHub and GitLab. UI/UX designer skills using the Figma platform": "Furthermore, I have experience with technologies such as React.Js, Python, Javascript and PHP in addition to knowledge about code versioning tools and platforms such as Git, GitHub and GitLab. UI/UX designer skills using the Figma platform",
          "I also have a technical course in Systems Development and experience as a development intern at the company Tecla T.": "I also have a technical course in Systems Development and experience as a development intern at the company Tecla T.",
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
          "About me:": "Sobre mim:",
          "Experience": "Experiência",
          "My name is Natanael, I'm 17 years old and I love technology and innovation. I currently study full-time with an integrated Systems Development course Furthermore, I am interning at Tecla T, working on the development team.": "Meu nome é Natanael, tenho 17 anos e adoro tecnologia e inovação. Atualmente estudo em tempo integral com um curso integrado de Desenvolvimento de Sistemas, além disso, estou estagiando na Tecla T, atuando na equipe de desenvolvimento.",
          "Furthermore, I have experience with technologies such as React.Js, Python, Javascript and PHP in addition to knowledge about code versioning tools and platforms such as Git, GitHub and GitLab. UI/UX designer skills using the Figma platform":"Além disso, possuo experiência com tecnologias como React.Js, Python, Javascript e PHP além de conhecimento sobre ferramentas e plataformas de versionamento de código como Git, GitHub e GitLab. Habilidades de designer UI/UX usando a plataforma Figma",
          "I also have a technical course in Systems Development and experience as a development intern at the company Tecla T.":  "Também possuo curso técnico em Desenvolvimento de Sistemas e experiência como estagiário de desenvolvimento na empresa Tecla T.",
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
