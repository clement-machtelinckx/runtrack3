document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const nomInput = document.getElementById("nom");
    const prenomInput = document.getElementById("prenom");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const confpassInput = document.getElementById("confpass");
    const validationButton = document.getElementById("validation");
  
    form.addEventListener("submit", function(e) {
      e.preventDefault();
  
      // Réinitialiser les messages d'erreur
      resetErrorMessages();
  
      // Effectuer les vérifications
      const isValid = validateForm();
  
      if (isValid) {
        // Envoyer les données du formulaire au serveur
        // (code à implémenter pour envoyer les données vers le backend)
        // Rediriger l'utilisateur vers la page de connexion
        window.location.href = "connexion.php";
      }
    });
  
    function resetErrorMessages() {
      const errorMessages = form.querySelectorAll(".error-message");
      errorMessages.forEach(errorMessage => {
        errorMessage.textContent = "";
      });
    }
  
    function validateForm() {
      let isValid = true;
  
      // Vérification du champ nom
      if (nomInput.value.trim() === "") {
        displayErrorMessage(nomInput, "Veuillez entrer votre nom.");
        isValid = false;
      }
  
      // Vérification du champ prénom
      if (prenomInput.value.trim() === "") {
        displayErrorMessage(prenomInput, "Veuillez entrer votre prénom.");
        isValid = false;
      }
  
      // Vérification du champ email
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(emailInput.value.trim())) {
        displayErrorMessage(emailInput, "Veuillez entrer une adresse email valide.");
        isValid = false;
      }
  
      // Vérification du champ mot de passe
      if (passwordInput.value.trim() === "") {
        displayErrorMessage(passwordInput, "Veuillez entrer un mot de passe.");
        isValid = false;
      }
  
      // Vérification du champ confirmation de mot de passe
      if (confpassInput.value.trim() === "") {
        displayErrorMessage(confpassInput, "Veuillez confirmer votre mot de passe.");
        isValid = false;
      } else if (confpassInput.value.trim() !== passwordInput.value.trim()) {
        displayErrorMessage(confpassInput, "Les mots de passe ne correspondent pas.");
        isValid = false;
      }
  
      return isValid;
    }
  
    function displayErrorMessage(inputElement, message) {
      const errorMessage = inputElement.nextElementSibling;
      errorMessage.textContent = message;
    }
  });
  