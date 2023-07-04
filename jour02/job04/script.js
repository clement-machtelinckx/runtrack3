const textarea = document.getElementById('keylogger');
let isTextareaFocused = false;

// Écouteur d'événement pour la touche enfoncée
document.addEventListener('keydown', function(event) {
  const key = event.key.toLowerCase();
  
  // Vérifier si le focus est dans le textarea
  if (document.activeElement === textarea) {
    isTextareaFocused = true;
  } else {
    isTextareaFocused = false;
  }
  
  // Ajouter la lettre dans le textarea
  if (/[a-z]/.test(key)) {
    textarea.value += key.repeat(isTextareaFocused ? 1 : 1);
  }
});
