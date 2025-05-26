// Fonction pour initialiser les composants du menu mobile
function initializeMobileComponents() {
  const languageContainer = document.getElementById('language-container');
  const toggleContainer = document.getElementById('toggle-container');
  const languageContainerMobile = document.getElementById('language-container-mobile');
  const toggleContainerMobile = document.getElementById('toggle-container-mobile');

  if (languageContainer && languageContainerMobile) {
    // Déplacer le contenu au lieu de le cloner
    while (languageContainer.firstChild) {
      languageContainerMobile.appendChild(languageContainer.firstChild);
    }
  }

  if (toggleContainer && toggleContainerMobile) {
    // Déplacer le contenu au lieu de le cloner
    while (toggleContainer.firstChild) {
      toggleContainerMobile.appendChild(toggleContainer.firstChild);
    }
  }

  // Appliquer les traductions aux liens du menu mobile
  if (typeof updateTranslations === 'function') {
    updateTranslations();
  }
}

// Fonction pour restaurer les composants
function restoreComponents() {
  const languageContainer = document.getElementById('language-container');
  const toggleContainer = document.getElementById('toggle-container');
  const languageContainerMobile = document.getElementById('language-container-mobile');
  const toggleContainerMobile = document.getElementById('toggle-container-mobile');

  if (languageContainer && languageContainerMobile) {
    // Restaurer le contenu
    while (languageContainerMobile.firstChild) {
      languageContainer.appendChild(languageContainerMobile.firstChild);
    }
  }

  if (toggleContainer && toggleContainerMobile) {
    // Restaurer le contenu
    while (toggleContainerMobile.firstChild) {
      toggleContainer.appendChild(toggleContainerMobile.firstChild);
    }
  }
}

// Fonction pour basculer le menu mobile
function toggleMobileMenu() {
  const menuMobile = document.getElementById('menu-mobile');
  const overlay = document.querySelector('.overlay-menu-mobile');
  const burgerBtn = document.querySelector('.burger-btn');

  menuMobile.classList.toggle('active');
  overlay.classList.toggle('active');
  burgerBtn.classList.toggle('active');

  if (menuMobile.classList.contains('active')) {
    // Déplacer les composants dans le menu mobile
    initializeMobileComponents();
  } else {
    // Restaurer les composants dans leur position d'origine
    restoreComponents();
  }
}

// Fermer le menu mobile lors du clic sur un lien
document.querySelectorAll('.menu-mobile .nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    const menuMobile = document.getElementById('menu-mobile');
    const overlay = document.querySelector('.overlay-menu-mobile');
    const burgerBtn = document.querySelector('.burger-btn');

    menuMobile.classList.remove('active');
    overlay.classList.remove('active');
    burgerBtn.classList.remove('active');

    // Restaurer les composants
    restoreComponents();
  });
});

// Gestion des mots rotatifs
function initRotatingWords() {
  const words = document.querySelectorAll('.rotating-words .word');
  let currentIndex = 0;

  // Activer le premier mot
  if (words.length > 0) {
    words[0].classList.add('active');
  }

  // Fonction pour changer le mot actif
  function rotateWords() {
    const currentWord = words[currentIndex];
    const nextIndex = (currentIndex + 1) % words.length;
    const nextWord = words[nextIndex];

    // Ajouter la classe inactive au mot actuel
    currentWord.classList.add('inactive');
    currentWord.classList.remove('active');

    // Activer le prochain mot
    nextWord.classList.add('active');
    nextWord.classList.remove('inactive');

    // Mettre à jour l'index
    currentIndex = nextIndex;
  }

  // Changer le mot toutes les 4 secondes
  setInterval(rotateWords, 4000);
}

// Initialiser les mots rotatifs au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
  initRotatingWords();
}); 