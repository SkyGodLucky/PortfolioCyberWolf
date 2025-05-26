const emailjs = require('@emailjs/nodejs');

exports.handler = async function (event, context) {
  // Vérifier que c'est une requête POST
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: 'Method Not Allowed'
    };
  }

  try {
    // Récupérer les données du formulaire
    const data = JSON.parse(event.body);

    // Initialiser EmailJS avec la clé publique
    emailjs.init(process.env.EMAILJS_PUBLIC_KEY);

    // Envoyer l'email
    const result = await emailjs.send(
      process.env.EMAILJS_SERVICE_ID,
      process.env.EMAILJS_TEMPLATE_ID,
      {
        prenom: data.prenom,
        nom: data.nom,
        from_name: `${data.prenom} ${data.nom}`,
        from_email: data.email,
        phone: data.telephone,
        subject: data.sujet,
        message: data.message
      }
    );

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email envoyé avec succès' })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Erreur lors de l\'envoi de l\'email' })
    };
  }
}; 