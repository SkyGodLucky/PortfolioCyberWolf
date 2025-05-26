document.addEventListener('DOMContentLoaded', function () {
  try {
    emailjs.init('MTwhFQ8nLLVPOysUI');
  } catch (error) {
    console.error('Erreur lors de l\'initialisation d\'EmailJS:', error);
  }
}); 