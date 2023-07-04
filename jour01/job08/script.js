function sommenombrespremiers(num1, num2) {
    // Vérifier si les deux nombres sont premiers
    if (estNombrePremier(num1) && estNombrePremier(num2)) {
      return num1 + num2;
    } else {
      return false;
    }
  }
  
  // Fonction pour vérifier si un nombre est premier
  function estNombrePremier(num) {
    if (num <= 1) {
      return false;
    }
    
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    
    return true;
  }
  
  // Exemple d'utilisation
  const num1 = 13;
  const num2 = 7;
  const somme = sommenombrespremiers(num1, num2);
  if (somme !== false) {
    console.log("La somme des nombres premiers est :", somme);
  } else {
    console.log("Au moins l'un des nombres n'est pas premier.");
  }
  