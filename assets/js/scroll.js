document.addEventListener('DOMContentLoaded', function () {
  // Sélectionner tous les liens internes (navigation et boutons)
  const internalLinks = document.querySelectorAll('a[href^="#"]');

  // Ajouter un écouteur d'événement à chaque lien
  internalLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}); 