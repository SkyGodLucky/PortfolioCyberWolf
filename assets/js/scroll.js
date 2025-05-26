document.addEventListener('DOMContentLoaded', function () {
  // Sélectionner tous les liens internes (navigation et boutons)
  const internalLinks = document.querySelectorAll('a[href^="#"]');

  // Fonction pour le défilement fluide
  function smoothScroll(targetPosition, duration) {
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const easeInOutCubic = progress < 0.5
        ? 4 * progress * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;

      window.scrollTo(0, startPosition + distance * easeInOutCubic);

      if (timeElapsed < duration) {
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
        smoothScroll(targetPosition, 1000); // 1000ms = 1 seconde pour l'animation
      }
    });
  });
}); 