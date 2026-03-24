const contactBtn = document.getElementById("contact-btn");
const navbarToggler = document.querySelector(".navbar-toggler");
const navbarCollapse = document.querySelector(".navbar-collapse");
const navLinks = document.querySelectorAll(".nav-link");
const languageButtons = document.querySelectorAll(".lang-btn");

const translations = {
  en: {
    documentTitle: "Portfolio",
    navHome: "01. Home",
    navAbout: "02. About Me",
    navProjects: "03. My Projects",
    navContact: "04. Contact",
    heroTitle: "Hi, I am <span>Sofia</span>",
    heroSubtitle: "I am an aspiring UX/UI designer",
    heroRole: "Web & UX/UI Design",
    heroTagline: "Building clean and accessible web experiences.",
    contactBtn: "Get in touch",
    aboutTitle: "About me",
    aboutLocation: "I am from Argentina, Buenos Aires based in Munchen, Germany.",
    aboutTechIntro: "These are the technologies & tools I have been working with recently:",
    aboutP1:
      "I'm transitioning into UX/UI design and currently building my skills in user-centered design, interface design and product thinking.",
    aboutP2:
      "My background in front-end development helps me understand how designs translate into real interfaces, which allows me to create designs that are both user-friendly and technically feasible.",
    aboutP3:
      "Right now I'm focused on improving my design skills, learning modern UX processes and building projects that combine usability, accessibility and clean visual design.",
    aboutP4:
      "I'm currently working toward further professional training in UX/UI design and expanding my portfolio with real projects.",
    projectsTitle: "My Projects",
    projectsSubtitle: "These are some of my projects",
    proj1Title: "Todo List",
    proj1Desc: "This is a simple To Do List app made with Vue 3 and Vite.",
    proj2Title: "Weather App",
    proj2Desc: "This is a simple weather app made with Vue.",
    proj3Title: "Task Tracker App",
    proj3Desc: "This is a simple Task Tracker made with Vue + Vite.",
    proj4Title: "Gecko Gaming",
    proj4Desc: "This is an e-commerce full-stack app made with the MERN stack.",
    repoButton: "Github repository",
    figmaButton: "Figma Design",
    contactTitle: "Let's get in touch!",
    cvButton: "CV",
    backToTop: "Back to top",
    footerText: "Made with love by Sofia Dinatolo, 2023 - 2026"
  },
  es: {
    documentTitle: "Portafolio",
    navHome: "01. Inicio",
    navAbout: "02. Sobre mi",
    navProjects: "03. Mis Proyectos",
    navContact: "04. Contacto",
    heroTitle: "Hola, soy <span>Sofia</span>",
    heroSubtitle: "Soy una futura disenadora UX/UI",
    heroRole: "Diseno Web y UX/UI",
    heroTagline: "Construyendo experiencias web limpias y accesibles.",
    contactBtn: "Contactame",
    aboutTitle: "Sobre mi",
    aboutLocation: "Soy de Buenos Aires, Argentina, y vivo en Munchen, Alemania.",
    aboutTechIntro: "Estas son las tecnologias y herramientas con las que estuve trabajando recientemente:",
    aboutP1:
      "Estoy haciendo la transicion al diseno UX/UI y actualmente fortaleciendo mis habilidades en diseno centrado en las personas, diseno de interfaces y pensamiento de producto.",
    aboutP2:
      "Mi experiencia en desarrollo front-end me ayuda a entender como los disenos se convierten en interfaces reales, lo que me permite crear soluciones amigables para las personas y viables tecnicamente.",
    aboutP3:
      "Ahora estoy enfocada en mejorar mis habilidades de diseno, aprender procesos modernos de UX y construir proyectos que combinen usabilidad, accesibilidad y diseno visual limpio.",
    aboutP4:
      "Actualmente estoy trabajando para continuar mi formacion profesional en UX/UI y ampliar mi portafolio con proyectos reales.",
    projectsTitle: "Mis Proyectos",
    projectsSubtitle: "Estos son algunos de mis proyectos",
    proj1Title: "Lista de Tareas",
    proj1Desc: "Esta es una app simple de lista de tareas hecha con Vue 3 y Vite.",
    proj2Title: "App del Clima",
    proj2Desc: "Esta es una app simple del clima hecha con Vue.",
    proj3Title: "App de Seguimiento de Tareas",
    proj3Desc: "Esta es una app simple de seguimiento de tareas hecha con Vue + Vite.",
    proj4Title: "Gecko Gaming",
    proj4Desc: "Esta es una app full-stack de e-commerce hecha con MERN Stack.",
    repoButton: "Repositorio de Github",
    figmaButton: "Diseno en Figma",
    contactTitle: "Hablemos!",
    cvButton: "CV",
    backToTop: "Volver arriba",
    footerText: "Hecho con amor por Sofia Dinatolo, 2023 - 2026"
  },
  de: {
    documentTitle: "Portfolio",
    navHome: "01. Start",
    navAbout: "02. Uber mich",
    navProjects: "03. Meine Projekte",
    navContact: "04. Kontakt",
    heroTitle: "Hi, ich bin <span>Sofia</span>",
    heroSubtitle: "Ich bin eine angehende UX/UI-Designerin",
    heroRole: "Web- und UX/UI-Design",
    heroTagline: "Ich baue klare und barrierefreie Web-Erlebnisse.",
    contactBtn: "Kontakt aufnehmen",
    aboutTitle: "Uber mich",
    aboutLocation: "Ich komme aus Buenos Aires, Argentinien, und lebe in Munchen, Deutschland.",
    aboutTechIntro: "Das sind die Technologien und Tools, mit denen ich zuletzt gearbeitet habe:",
    aboutP1:
      "Ich befinde mich im Wechsel in den UX/UI-Bereich und baue aktuell meine Fahigkeiten in nutzerzentriertem Design, Interface-Design und Product Thinking aus.",
    aboutP2:
      "Mein Hintergrund in der Frontend-Entwicklung hilft mir zu verstehen, wie Designs in echte Interfaces umgesetzt werden. So kann ich Losungen gestalten, die nutzerfreundlich und technisch umsetzbar sind.",
    aboutP3:
      "Derzeit konzentriere ich mich darauf, meine Design-Fahigkeiten zu verbessern, moderne UX-Prozesse zu lernen und Projekte zu entwickeln, die Usability, Accessibility und klares visuelles Design verbinden.",
    aboutP4:
      "Aktuell arbeite ich daran, meine professionelle Weiterbildung im UX/UI-Design fortzusetzen und mein Portfolio mit realen Projekten zu erweitern.",
    projectsTitle: "Meine Projekte",
    projectsSubtitle: "Hier sind einige meiner Projekte",
    proj1Title: "To-do-Liste",
    proj1Desc: "Das ist eine einfache To-do-Listen-App mit Vue 3 und Vite.",
    proj2Title: "Wetter-App",
    proj2Desc: "Das ist eine einfache Wetter-App mit Vue.",
    proj3Title: "Task-Tracker-App",
    proj3Desc: "Das ist ein einfacher Task-Tracker mit Vue + Vite.",
    proj4Title: "Gecko Gaming",
    proj4Desc: "Das ist eine Full-Stack-E-Commerce-App mit dem MERN-Stack.",
    repoButton: "Github-Repository",
    figmaButton: "Figma-Design",
    contactTitle: "Lass uns Kontakt aufnehmen!",
    cvButton: "CV",
    backToTop: "Nach oben",
    footerText: "Mit Liebe gemacht von Sofia Dinatolo, 2023 - 2026"
  }
};

function setElementText(id, value, useHtml = false) {
  const element = document.getElementById(id);
  if (!element) return;
  if (useHtml) {
    element.innerHTML = value;
    return;
  }
  element.textContent = value;
}

function setActiveLanguageButton(lang) {
  languageButtons.forEach((button) => {
    const isActive = button.dataset.lang === lang;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function applyLanguage(lang) {
  const dictionary = translations[lang] || translations.en;

  document.title = dictionary.documentTitle;
  document.documentElement.setAttribute("lang", lang);

  setElementText("nav-home", dictionary.navHome);
  setElementText("nav-about", dictionary.navAbout);
  setElementText("nav-projects", dictionary.navProjects);
  setElementText("nav-contact", dictionary.navContact);

  setElementText("hero-title", dictionary.heroTitle, true);
  setElementText("hero-subtitle", dictionary.heroSubtitle);
  setElementText("hero-role", dictionary.heroRole);
  setElementText("hero-tagline", dictionary.heroTagline);
  setElementText("contact-btn", dictionary.contactBtn);

  setElementText("about-title", dictionary.aboutTitle);
  setElementText("about-location", dictionary.aboutLocation);
  setElementText("about-tech-intro", dictionary.aboutTechIntro);
  setElementText("about-p1", dictionary.aboutP1);
  setElementText("about-p2", dictionary.aboutP2);
  setElementText("about-p3", dictionary.aboutP3);
  setElementText("about-p4", dictionary.aboutP4);

  setElementText("projects-title", dictionary.projectsTitle);
  setElementText("projects-subtitle", dictionary.projectsSubtitle);
  setElementText("proj1-title", dictionary.proj1Title);
  setElementText("proj1-desc", dictionary.proj1Desc);
  setElementText("proj2-title", dictionary.proj2Title);
  setElementText("proj2-desc", dictionary.proj2Desc);
  setElementText("proj3-title", dictionary.proj3Title);
  setElementText("proj3-desc", dictionary.proj3Desc);
  setElementText("proj4-title", dictionary.proj4Title);
  setElementText("proj4-desc", dictionary.proj4Desc);

  const repoLinks = document.querySelectorAll(".repo-link");
  repoLinks.forEach((link) => {
    link.textContent = dictionary.repoButton;
  });

  setElementText("proj4-figma", dictionary.figmaButton);
  setElementText("contact-title", dictionary.contactTitle);
  setElementText("cv-btn", dictionary.cvButton);
  setElementText("back-to-top-text", dictionary.backToTop);
  setElementText("footer-text", dictionary.footerText);

  setActiveLanguageButton(lang);
  localStorage.setItem("portfolioLanguage", lang);
}

if (navbarToggler && navbarCollapse) {
  navbarToggler.addEventListener("click", function () {
    navbarCollapse.classList.toggle("show");
  });
}

navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    if (navbarCollapse) {
      navbarCollapse.classList.remove("show");
    }
  });
});

document.addEventListener("click", function (event) {
  if (!navbarCollapse) return;
  const targetElement = event.target;
  if (
    !targetElement.classList.contains("navbar-toggler") &&
    !targetElement.closest(".navbar-collapse") &&
    navbarCollapse.classList.contains("show")
  ) {
    navbarCollapse.classList.remove("show");
  }
});

if (contactBtn) {
  contactBtn.addEventListener("click", function () {
    const contactMe = document.getElementById("contact-me");
    if (contactMe) {
      contactMe.scrollIntoView({ behavior: "smooth" });
    }
  });
}

languageButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const selectedLanguage = this.dataset.lang;
    applyLanguage(selectedLanguage);
  });
});

const storedLanguage = localStorage.getItem("portfolioLanguage") || "en";
applyLanguage(storedLanguage);

function toggleDarkMode() {
  const body = document.body;
  const icon = document.querySelector(".btn-dark-mode i");
  body.classList.toggle("dark-mode");
  if (icon) {
    icon.classList.toggle("fa-moon");
    icon.classList.toggle("fa-sun");
  }
}
