document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contact-form');
  const phoneInput = document.getElementById('telephone');
  const emailInput = document.getElementById('email');
  const nomInput = document.getElementById('nom');
  const prenomInput = document.getElementById('prenom');
  const sujetInput = document.getElementById('sujet');
  const messageInput = document.getElementById('message');

  // Regex patterns
  const patterns = {
    // Nom et prénom : lettres, espaces, tirets et apostrophes, 2-50 caractères
    name: /^[a-zA-ZÀ-ÿ\s'-]{2,50}$/,

    // Email : format standard avec support des caractères spéciaux
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,

    // Téléphone : format international (8-15 chiffres)
    phone: /^\+?[0-9\s.-]{8,15}$/,

    // Sujet : lettres, chiffres, espaces, tirets, apostrophes et ponctuation, 2-100 caractères
    subject: /^[a-zA-ZÀ-ÿ0-9\s.,!?'-]{2,100}$/,

    // Message : lettres, chiffres, espaces, tirets, apostrophes, ponctuation et retours à la ligne, 10-1000 caractères
    message: /^[a-zA-ZÀ-ÿ0-9\s.,!?'\n-]{10,1000}$/
  };

  // Messages d'erreur
  const errorMessages = {
    fr: {
      nom: 'Le nom doit contenir entre 2 et 50 caractères (lettres, espaces, tirets et apostrophes)',
      prenom: 'Le prénom doit contenir entre 2 et 50 caractères (lettres, espaces, tirets et apostrophes)',
      email: 'Veuillez entrer une adresse email valide',
      telephone: 'Veuillez entrer un numéro de téléphone valide (format international)',
      sujet: 'Le sujet doit contenir entre 2 et 100 caractères (lettres, chiffres, espaces, tirets, apostrophes et ponctuation)',
      message: 'Le message doit contenir entre 10 et 1000 caractères',
      required: 'Ce champ est requis',
      script: 'Les caractères de script ne sont pas autorisés'
    },
    en: {
      nom: 'Name must contain between 2 and 50 characters (letters, spaces, hyphens and apostrophes)',
      prenom: 'First name must contain between 2 and 50 characters (letters, spaces, hyphens and apostrophes)',
      email: 'Please enter a valid email address',
      telephone: 'Please enter a valid phone number (international format)',
      sujet: 'Subject must contain between 2 and 100 characters (letters, numbers, spaces, hyphens, apostrophes and punctuation)',
      message: 'Message must contain between 10 and 1000 characters',
      required: 'This field is required',
      script: 'Script characters are not allowed'
    }
  };

  // Fonction pour obtenir le message d'erreur dans la langue actuelle
  function getErrorMessage(key) {
    const currentLang = localStorage.getItem('language') || 'fr';
    return errorMessages[currentLang][key];
  }

  // Fonction pour formater le numéro de téléphone
  function formatPhoneNumber(input) {
    let value = input.value;
    // Garde uniquement les chiffres, le +, les espaces, les points et les tirets
    value = value.replace(/[^\d+\s.-]/g, '');
    input.value = value;
  }

  function showError(input, message) {
    const formGroup = input.parentElement;
    let errorMessage = formGroup.querySelector('.error-message');

    if (!errorMessage) {
      errorMessage = document.createElement('div');
      errorMessage.className = 'error-message';
      formGroup.appendChild(errorMessage);
    }

    errorMessage.textContent = message;
    errorMessage.style.display = 'block';
    errorMessage.style.opacity = '1';
    errorMessage.style.color = '#ff3333';
    errorMessage.style.fontSize = '0.8rem';
    errorMessage.style.marginTop = '0.2rem';
    errorMessage.style.position = 'relative';
    errorMessage.style.zIndex = '2';
  }

  function clearError(input) {
    const formGroup = input.parentElement;
    const errorMessage = formGroup.querySelector('.error-message');
    if (errorMessage) {
      errorMessage.textContent = '';
      errorMessage.style.display = 'none';
      errorMessage.style.opacity = '0';
    }
  }

  // Fonction de validation générique
  function validateField(input, pattern, errorMessageKey) {
    const value = input.value.trim();

    // Vérification des caractères de script en premier
    if (/[<>]/.test(value)) {
      showError(input, getErrorMessage('script'));
      return false;
    }

    if (!value) {
      showError(input, getErrorMessage('required'));
      return false;
    }

    if (!pattern.test(value)) {
      showError(input, getErrorMessage(errorMessageKey));
      return false;
    }

    clearError(input);
    return true;
  }

  // Validation du nom
  nomInput.addEventListener('input', function () {
    validateField(this, patterns.name, 'nom');
  });

  // Validation du prénom
  prenomInput.addEventListener('input', function () {
    validateField(this, patterns.name, 'prenom');
  });

  // Validation de l'email
  emailInput.addEventListener('input', function () {
    validateField(this, patterns.email, 'email');
  });

  // Validation du téléphone
  phoneInput.addEventListener('input', function () {
    formatPhoneNumber(this);
    validateField(this, patterns.phone, 'telephone');
  });

  // Validation du sujet
  sujetInput.addEventListener('input', function () {
    validateField(this, patterns.subject, 'sujet');
  });

  // Validation du message
  messageInput.addEventListener('input', function () {
    validateField(this, patterns.message, 'message');
  });

  // Fonction pour valider tout le formulaire
  function validateForm() {
    let isValid = true;
    isValid = validateField(nomInput, patterns.name, 'nom') && isValid;
    isValid = validateField(prenomInput, patterns.name, 'prenom') && isValid;
    isValid = validateField(emailInput, patterns.email, 'email') && isValid;
    isValid = validateField(phoneInput, patterns.phone, 'telephone') && isValid;
    isValid = validateField(sujetInput, patterns.subject, 'sujet') && isValid;
    isValid = validateField(messageInput, patterns.message, 'message') && isValid;
    return isValid;
  }

  // Validation du formulaire avant soumission
  form.addEventListener('submit', async function (event) {
    event.preventDefault();

    if (validateForm()) {
      try {
        const formData = {
          prenom: prenomInput.value,
          nom: nomInput.value,
          from_name: `${prenomInput.value} ${nomInput.value}`,
          from_email: emailInput.value,
          phone: phoneInput.value,
          subject: sujetInput.value,
          message: messageInput.value
        };

        const response = await fetch('/.netlify/functions/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData)
        });

        if (!response.ok) {
          throw new Error('Erreur réseau');
        }

        const data = await response.json();
        showPopup();
        form.reset();
      } catch (error) {
        console.error('Erreur:', error);
        alert('Une erreur est survenue lors de l\'envoi du message. Veuillez réessayer.');
      }
    }
  });

  // Fonction pour mettre à jour tous les messages d'erreur existants
  function updateAllErrorMessages() {
    const errorElements = document.querySelectorAll('.error-message');
    errorElements.forEach(errorElement => {
      const input = errorElement.parentElement.querySelector('input, textarea');
      if (input) {
        const currentMessage = errorElement.textContent;
        // Trouver la clé correspondant au message actuel
        const currentLang = localStorage.getItem('language') || 'fr';
        const otherLang = currentLang === 'fr' ? 'en' : 'fr';
        const messageKey = Object.keys(errorMessages[currentLang]).find(key =>
          errorMessages[currentLang][key] === currentMessage ||
          errorMessages[otherLang][key] === currentMessage
        );
        if (messageKey) {
          errorElement.textContent = getErrorMessage(messageKey);
        }
      }
    });
  }

  // Écouter les changements de langue
  document.addEventListener('languageChanged', updateAllErrorMessages);
});
