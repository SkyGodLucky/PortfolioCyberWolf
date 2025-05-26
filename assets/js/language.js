// Initialize language
function initializeLanguage() {
  const languageBtns = document.querySelectorAll('.language-btn');
  const currentLang = localStorage.getItem('language') || 'fr';

  // Set active language
  languageBtns.forEach(btn => {
    if (btn.dataset.lang === currentLang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Add click event listeners
  languageBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      const lang = this.dataset.lang;

      // Update active state
      languageBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');

      // Save language preference
      localStorage.setItem('language', lang);

      // Update page content
      updateContent(lang);

      // Émettre l'événement de changement de langue
      document.dispatchEvent(new Event('languageChanged'));
    });
  });
}

// Update page content based on language
function updateContent(lang) {
  const translations = {
    fr: {
      home: 'Accueil',
      about: 'À propos',
      portfolio: 'Portfolio',
      portfolio_title: 'Portfolio',
      portfolio_subtitle: 'Mes langages de programmation maitrisés :',
      contact: {
        title: 'Me contacter',
        subtitle: 'Si besoin n\'hésitez pas à me contacter via le formulaire ci-dessous',
        name: 'Nom',
        firstName: 'Prénom',
        email: 'Email',
        phone: 'Téléphone',
        message: 'Message',
        send: 'Envoyer',
        placeholders: {
          name: 'ex: Dupont',
          firstName: 'ex: Jean',
          email: 'ex: jean.dupont@email.com',
          phone: 'ex: 06 12 34 56 78 ou +33 6 12 34 56 78',
          message: 'Écrivez votre message ici...',
          subject: 'Sujet',
          subject_placeholder: 'ex: Proposition de projet'
        }
      },
      greeting: 'Bonjour, je suis',
      cyber: 'Cyber Wolf',
      title: 'Développeur Web',
      description: 'Fort d\'une expérience solide au sein de l\'armée française, je me suis orienté avec passion vers le développement Web.<br> Initialement formé à la logistique, j\'ai su faire preuve d\'initiative en accompagnant les techniciens informatiques de ma base, éveillant ainsi un intérêt profond pour les technologies numériques.<br> Rigoureux, curieux et résolument tourné vers l\'avenir, je poursuis aujourd\'hui une formation spécialisée en développement Web et Web Mobile au sein de l\'école RI7, avec l\'ambition affirmée de faire du code mon nouveau terrain d\'excellence.',
      cv: 'Curriculum Vitae',
      contactMe: 'Me contacter',
      aboutMe: 'À propos',
      aboutMeDescription: 'Développeur Web et Web Mobile alliant <span class="rotating-words"><span class="word">performance</span><span class="word">réactivité</span><span class="word">créativité</span></span>',
      formations: 'Formations',
      experiences: 'Expériences',
      formation1: 'Formation Développeur Web et Web Mobile',
      formation2: 'Baccalauréat Général Scientifique',
      experience1: 'Ouvrier d\'Etat en Logistique et en Pyrotechnie',
      formation1Desc: 'RI7 - <span>2025</span>',
      formation2Desc: 'Lycée Antonin Artaud - <span>2016</span>',
      experience1Desc: 'Service Interarmées de la Santé et des Munitions - <span>2018 - 2025</span>',
      skills: 'Compétences transverses',
      skills1: 'Manager une équipe',
      skills2: 'Organisation et gestion de projet',
      skills3: 'Travail en équipe',
      skills4: 'Rigueur, précision et respect des procédures',
      skills5: 'Esprit d\'analyse et de résolution de problèmes',
      subject: 'Sujet',
      subject_placeholder: 'ex: Proposition de projet',
      popup_title: 'Message envoyé !',
      popup_message: 'Votre message a été envoyé avec succès.',
      popup_close: 'Fermer',
      footer_copyright: "© 2025 CyberWolf. Tous droits réservés.",
      footer_github: "GitHub",
      footer_linkedin: "LinkedIn",
      footer_facebook: "Facebook",
      footer_instagram: "Instagram",
      // Portfolio Section
      "project_pendu_title": "Le Pendu",
      "project_pendu_desc": "Jeu du pendu interactif développé en HTML, CSS et JavaScript. Intégration d'une API pour la génération aléatoire de mots, système de score, animations fluides et interface responsive.",

      "project_labyrinthe_title": "Labyrinthe",
      "project_labyrinthe_desc": "Labyrinthe interactif développé en PHP, CSS. Interface intuitive, animations fluides, darkmode, lightmode, modification de la langue et génération de labyrinthe aléatoire.",

      "project_staffy_title": "Site Staffordshire Bull Terrier",
      "project_staffy_desc": "Site vitrine dédié aux Staffordshire Bull Terrier, développé en HTML et CSS. Projet personnel réalisé dans le cadre de ma formation en développement web.",

      "project_dev_title": "Site pour développeur",
      "project_dev_desc": "Plateforme de présentation du métier de développeur web et de mon parcours d'apprentissage. Développé en HTML, CSS et JavaScript.",

      "project_todo_title": "To-Do List",
      "project_todo_desc": "Application de gestion de tâches interactive développée en HTML, CSS et JavaScript. Projet réalisé dans le cadre de ma formation en développement web.",

      "project_space_title": "Space Invaders",
      "project_space_desc": "Jeu inspiré du classique Space Invaders, développé en JavaScript. Intègre un système de score, des contrôles au clavier pour les déplacements et les tirs.",

      "project_quiz_title": "Quiz Sherlock Holmes",
      "project_quiz_desc": "Quiz interactif sur l'univers de Sherlock Holmes, développé en JavaScript. Inclut un système de score et des questions variées sur la série.",

      "project_morpion_title": "Jeu morpion et puissance 4",
      "project_morpion_desc": "Jeu de morpion et de puissance 4 développé en HTML, CSS et JavaScript. Il permet de jouer contre l'ordinateur ou contre un autre joueur.",

      "project_crud_title": "CRUD",
      "project_crud_desc": "CRUD développé en PHP, CSS et MySQL. Il permet de créer, lire, mettre à jour et supprimer des données dans une base de données.",

      "project_life_title": "Jeu de la vie",
      "project_life_desc": "Jeu de la vie développé en HTML, CSS et JavaScript. Il respecte les règles originelles et a été réalisé dans le cadre d'un devoir pour ma formation.",

      "project_aim_title": "Aim Trainer",
      "project_aim_desc": "Site permettant de s'entraîner à la visée pour des FPS. Développé en HTML, CSS et JavaScript.",
      nav_home: 'Accueil',
      nav_about: 'À propos',
      nav_portfolio: 'Portfolio',
      nav_contact: 'Me contacter'
    },
    en: {
      home: 'Home',
      about: 'About',
      portfolio: 'Portfolio',
      portfolio_title: 'Portfolio',
      portfolio_subtitle: 'My mastered programming languages :',
      contact: {
        title: 'Contact Me',
        subtitle: 'If needed, feel free to contact me using the form below',
        name: 'Name',
        firstName: 'First Name',
        email: 'Email',
        phone: 'Phone',
        message: 'Message',
        send: 'Send',
        placeholders: {
          name: 'ex: Smith',
          firstName: 'ex: John',
          email: 'ex: john.smith@email.com',
          phone: 'ex: (555) 123-4567 or +1 555 123 4567',
          message: 'Write your message here...',
          subject: 'Subject',
          subject_placeholder: 'ex: Project proposal'
        }
      },
      greeting: 'Hello, I am',
      cyber: 'Cyber Wolf',
      title: 'Web Developer',
      description: 'With solid experience in the French military, I have passionately turned to web development.<br> Initially trained in logistics, I showed initiative by supporting the IT technicians at my base, awakening a deep interest in digital technologies.<br> Rigorous, curious, and resolutely forward-looking, I am now pursuing specialized training in Web and Mobile Web Development at RI7 school, with the clear ambition of making coding my new field of excellence.',
      cv: 'Curriculum Vitae',
      contactMe: 'Contact me',
      aboutMe: 'About',
      aboutMeDescription: 'Web Developer and Mobile Web Developer combining <span class="rotating-words"><span class="word">performance</span><span class="word">reactivity</span><span class="word">creativity</span></span>',
      formations: 'Training',
      experiences: 'Experience',
      formation1: 'Web Developer and Mobile Web Developer Training',
      formation2: 'Scientific Baccalaureate',
      experience1: 'State Worker in Logistics and Pyrotechnics',
      formation1Desc: 'RI7 - <span>2025</span>',
      formation2Desc: 'Antonin Artaud High School - <span>2016</span>',
      experience1Desc: 'Inter-Service Health and Ammunition Service - <span>2018 to 2025</span>',
      skills: 'Cross-functional Skills',
      skills1: 'Team Management',
      skills2: 'Project Organization and Management',
      skills3: 'Teamwork',
      skills4: 'Rigorous, Precise and Procedure Compliance',
      skills5: 'Analytical and Problem-Solving Mindset',
      subject: 'Subject',
      subject_placeholder: 'ex: Project proposal',
      popup_title: 'Message sent!',
      popup_message: 'Your message has been sent successfully.',
      popup_close: 'Close',
      footer_copyright: "© 2025 CyberWolf. All rights reserved.",
      footer_github: "GitHub",
      footer_linkedin: "LinkedIn",
      footer_facebook: "Facebook",
      footer_instagram: "Instagram",
      // Portfolio Section
      "project_pendu_title": "Hangman",
      "project_pendu_desc": "Interactive hangman game developed in HTML, CSS and JavaScript. Integration of an API for random word generation, scoring system, smooth animations and responsive interface.",

      "project_labyrinthe_title": "Maze",
      "project_labyrinthe_desc": "Interactive maze developed in PHP, CSS. Intuitive interface, smooth animations, darkmode, lightmode, language modification and random maze generation.",

      "project_staffy_title": "Staffordshire Bull Terrier Website",
      "project_staffy_desc": "Showcase website dedicated to Staffordshire Bull Terriers, developed in HTML and CSS. Personal project carried out as part of my web development training.",

      "project_dev_title": "Developer Website",
      "project_dev_desc": "Platform presenting the web developer profession and my learning journey. Developed in HTML, CSS and JavaScript.",

      "project_todo_title": "To-Do List",
      "project_todo_desc": "Interactive task management application developed in HTML, CSS and JavaScript. Project carried out as part of my web development training.",

      "project_space_title": "Space Invaders",
      "project_space_desc": "Game inspired by the classic Space Invaders, developed in JavaScript. Includes a scoring system, keyboard controls for movement and shooting.",

      "project_quiz_title": "Sherlock Holmes Quiz",
      "project_quiz_desc": "Interactive quiz about the Sherlock Holmes universe, developed in JavaScript. Includes a scoring system and various questions about the series.",

      "project_morpion_title": "Tic-tac-toe and Connect 4",
      "project_morpion_desc": "Tic-tac-toe and Connect 4 game developed in HTML, CSS and JavaScript. It allows playing against the computer or against another player.",

      "project_crud_title": "CRUD",
      "project_crud_desc": "CRUD developed in PHP, CSS and MySQL. It allows creating, reading, updating and deleting data in a database.",

      "project_life_title": "Game of Life",
      "project_life_desc": "Game of Life developed in HTML, CSS and JavaScript. It follows the original rules and was created as part of an assignment for my training.",

      "project_aim_title": "Aim Trainer",
      "project_aim_desc": "Website for training aim for FPS games. Developed in HTML, CSS and JavaScript.",
      nav_home: 'Home',
      nav_about: 'About',
      nav_portfolio: 'Portfolio',
      nav_contact: 'Contact Me'
    }
  };

  // Update navigation links in both navbar and mobile menu
  const allNavLinks = document.querySelectorAll('.nav-links a');
  allNavLinks.forEach(link => {
    const translateKey = link.getAttribute('data-translate');
    if (translateKey && translations[lang][translateKey]) {
      link.textContent = translations[lang][translateKey];
    }
  });

  // Update CW section
  const cwSection = document.querySelector('.CW-left');
  if (cwSection) {
    // Mettre à jour le texte de salutation
    const greetingText = cwSection.querySelector('h1').firstChild;
    greetingText.textContent = translations[lang].greeting + ' ';

    // Mettre à jour le span cyber avec animation seulement sur desktop
    const cyberSpan = cwSection.querySelector('.cyber');
    if (cyberSpan) {
      cyberSpan.textContent = translations[lang].cyber;
      // Vérifier si on est sur mobile
      if (window.innerWidth > 768) {
        cyberSpan.style.clipPath = 'inset(0 100% 0 0)';
        cyberSpan.style.animation = 'none';
        cyberSpan.offsetHeight; // Force reflow
        cyberSpan.style.animation = 'typing 5.5s linear infinite, cursor .4s step-end infinite alternate';
      }
    }

    cwSection.querySelector('h2').textContent = translations[lang].title;
    cwSection.querySelector('p').innerHTML = translations[lang].description;

    const buttons = cwSection.querySelectorAll('.btn');
    buttons[0].textContent = translations[lang].cv;
    buttons[1].textContent = translations[lang].contactMe;
  }

  // Update About section
  const aboutSection = document.querySelector('.about');
  if (aboutSection) {
    aboutSection.querySelector('h2').textContent = translations[lang].aboutMe;
    aboutSection.querySelector('h3').innerHTML = translations[lang].aboutMeDescription;

    // Update formations and experiences
    aboutSection.querySelector('.about-left h4').textContent = translations[lang].formations;
    aboutSection.querySelector('.about-right h4').textContent = translations[lang].experiences;

    // Update formation titles and descriptions
    const formationTitles = aboutSection.querySelectorAll('.about-left h5');
    const formationDescs = aboutSection.querySelectorAll('.about-left p');
    formationTitles[0].textContent = translations[lang].formation1;
    formationTitles[1].textContent = translations[lang].formation2;
    formationDescs[0].innerHTML = translations[lang].formation1Desc;
    formationDescs[1].innerHTML = translations[lang].formation2Desc;

    // Update experience title and description
    const experienceTitle = aboutSection.querySelector('.about-right h5');
    const experienceDesc = aboutSection.querySelector('.about-right p');
    experienceTitle.textContent = translations[lang].experience1;
    experienceDesc.innerHTML = translations[lang].experience1Desc;

    // Update skills section
    const skillsSection = aboutSection.querySelector('.about-skills');
    if (skillsSection) {
      skillsSection.querySelector('h3').textContent = translations[lang].skills;

      const skillsList = skillsSection.querySelectorAll('li');
      skillsList[0].textContent = translations[lang].skills1;
      skillsList[1].textContent = translations[lang].skills2;
      skillsList[2].textContent = translations[lang].skills3;
      skillsList[3].textContent = translations[lang].skills4;
      skillsList[4].textContent = translations[lang].skills5;
    }
  }

  // Update Portfolio section
  const portfolioSection = document.querySelector('.portfolio');
  if (portfolioSection) {
    portfolioSection.querySelector('h2').textContent = translations[lang].portfolio_title;
    const h3 = portfolioSection.querySelector('h3');
    const rotatingWords = h3.querySelector('.rotating-words-portfolio');
    h3.innerHTML = translations[lang].portfolio_subtitle + ' ';
    h3.appendChild(rotatingWords);

    // Mettre à jour les cartes de projet
    const projects = [
      { id: 'pendu', title: 'project_pendu_title', desc: 'project_pendu_desc' },
      { id: 'labyrinthe', title: 'project_labyrinthe_title', desc: 'project_labyrinthe_desc' },
      { id: 'staffy', title: 'project_staffy_title', desc: 'project_staffy_desc' },
      { id: 'dev', title: 'project_dev_title', desc: 'project_dev_desc' },
      { id: 'todo', title: 'project_todo_title', desc: 'project_todo_desc' },
      { id: 'space', title: 'project_space_title', desc: 'project_space_desc' },
      { id: 'quiz', title: 'project_quiz_title', desc: 'project_quiz_desc' },
      { id: 'morpion', title: 'project_morpion_title', desc: 'project_morpion_desc' },
      { id: 'crud', title: 'project_crud_title', desc: 'project_crud_desc' },
      { id: 'life', title: 'project_life_title', desc: 'project_life_desc' },
      { id: 'aim', title: 'project_aim_title', desc: 'project_aim_desc' }
    ];

    projects.forEach((project, index) => {
      const card = document.querySelector(`.project-card:nth-child(${index + 1})`);
      if (card) {
        const title = card.querySelector('h3');
        const desc = card.querySelector('p');

        if (title) title.textContent = translations[lang][project.title];
        if (desc) desc.textContent = translations[lang][project.desc];
      }
    });
  }

  // Update Contact section
  const contactSection = document.querySelector('.contact');
  if (contactSection) {
    contactSection.querySelector('h2').textContent = translations[lang].contact.title;
    contactSection.querySelector('h3').textContent = translations[lang].contact.subtitle;

    const form = document.getElementById('contact-form');
    if (form) {
      // Update labels
      const labels = form.querySelectorAll('.form-group label');
      labels[0].textContent = translations[lang].contact.name;
      labels[1].textContent = translations[lang].contact.firstName;
      labels[2].textContent = translations[lang].contact.email;
      labels[3].textContent = translations[lang].contact.phone;
      labels[4].textContent = translations[lang].subject;
      labels[5].textContent = translations[lang].contact.message;

      // Update placeholders
      const inputs = form.querySelectorAll('.form-group input, .form-group textarea');
      inputs[0].placeholder = translations[lang].contact.placeholders.name;
      inputs[1].placeholder = translations[lang].contact.placeholders.firstName;
      inputs[2].placeholder = translations[lang].contact.placeholders.email;
      inputs[3].placeholder = translations[lang].contact.placeholders.phone;
      inputs[4].placeholder = translations[lang].subject_placeholder;
      inputs[5].placeholder = translations[lang].contact.placeholders.message;

      // Update button
      form.querySelector('button').textContent = translations[lang].contact.send;
    }
  }

  // Update popup content
  const popup = document.getElementById('success-popup');
  if (popup) {
    popup.querySelector('h3').textContent = translations[lang].popup_title;
    popup.querySelector('p').textContent = translations[lang].popup_message;
    popup.querySelector('button').textContent = translations[lang].popup_close;
  }

  // Mise à jour du copyright
  const copyright = document.querySelector('.copyright');
  if (copyright) {
    copyright.textContent = translations[lang].footer_copyright;
  }

  // Mise à jour des attributs alt des icônes sociales
  const socialIcons = document.querySelectorAll('.social-icon');
  socialIcons.forEach(icon => {
    const platform = icon.alt.toLowerCase();
    if (translations[lang][`footer_${platform}`]) {
      icon.alt = translations[lang][`footer_${platform}`];
    }
  });
}

// Load language selector and initialize
document.addEventListener('DOMContentLoaded', () => {
  fetch('components/language.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('language-container').innerHTML = data;
      initializeLanguage();
    });
});