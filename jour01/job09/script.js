function tri(numbers, order) {
    // Vérifier si l'ordre est "asc" ou "desc"
    if (order === "asc") {
      // Tri ascendant
      for (let i = 0; i < numbers.length - 1; i++) {
        for (let j = 0; j < numbers.length - i - 1; j++) {
          if (numbers[j] > numbers[j + 1]) {
            // Échanger les éléments
            let temp = numbers[j];
            numbers[j] = numbers[j + 1];
            numbers[j + 1] = temp;
          }
        }
      }
    } else if (order === "desc") {
      // Tri décroissant
      for (let i = 0; i < numbers.length - 1; i++) {
        for (let j = 0; j < numbers.length - i - 1; j++) {
          if (numbers[j] < numbers[j + 1]) {
            // Échanger les éléments
            let temp = numbers[j];
            numbers[j] = numbers[j + 1];
            numbers[j + 1] = temp;
          }
        }
      }
    }
  
    return numbers;
  }
  
  // Exemple d'utilisation
  const numbers = [5, 2, 8, 1, 9, 3];
  const order = "asc";
  const sortedNumbers = tri(numbers, order);
  console.log(sortedNumbers);
  