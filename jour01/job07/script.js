function jourtravaille(date) {
    const jour = date.getDate();
    const mois = date.getMonth() + 1;
    const annee = date.getFullYear();
  
    const joursFeries2020 = [
      "2020-01-01", // Jour de l'An
      "2020-04-13", // Lundi de Pâques
      "2020-05-01", // Fête du Travail
      "2020-05-08", // Victoire 1945
      "2020-05-21", // Ascension
      "2020-06-01", // Lundi de Pentecôte
      "2020-07-14", // Fête Nationale
      "2020-08-15", // Assomption
      "2020-11-01", // Toussaint
      "2020-11-11", // Armistice 1918
      "2020-12-25"  // Noël
    ];
  
    const jourSemaine = date.getDay();
    const estFerie = joursFeries2020.includes(`${annee}-${mois.toString().padStart(2, '0')}-${jour.toString().padStart(2, '0')}`);
    
    if (estFerie) {
      console.log(`Le ${jour} ${mois} ${annee} est un jour férié.`);
    } else if (jourSemaine === 0 || jourSemaine === 6) {
      console.log(`Non, ${jour} ${mois} ${annee} est un week-end.`);
    } else {
      console.log(`Oui, ${jour} ${mois} ${annee} est un jour travaillé.`);
    }
  }
  
  // Exemple d'utilisation
  const date = new Date("2020-05-01"); // Date correspondant au 1er mai 2020
  jourtravaille(date);
  