document.addEventListener('DOMContentLoaded', function () {
  console.log('Initialisation d\'EmailJS...');
  try {
    emailjs.init('MTwhFQ8nLLVPOysUI');
    console.log('EmailJS initialisé avec succès');
  } catch (error) {
    console.error('Erreur lors de l\'initialisation d\'EmailJS:', error);
  }
}); 