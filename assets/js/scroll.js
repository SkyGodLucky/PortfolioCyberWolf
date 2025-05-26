document.addEventListener('DOMContentLoaded', function () {
  // Sélectionner tous les liens internes (navigation et boutons)
  const internalLinks = document.querySelectorAll('a[href^="#"]');

  // Fonction pour le défilement constant
  function smoothScroll(targetPosition, duration) {
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const startTime = performance.now();
    const speed = Math.abs(distance / duration); // Vitesse constante

    function animation(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Défilement linéaire (vitesse constante)
      window.scrollTo(0, startPosition + distance * progress);

      if (progress < 1) {
        requestAnimationFrame(animation);
      }
    }

    requestAnimationFrame(animation);
  }

  // Ajouter un écouteur d'événement à chaque lien
  internalLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset - 90;
        smoothScroll(targetPosition, 400); // Durée réduite pour un défilement plus rapide
      }
    });
  });
}); 