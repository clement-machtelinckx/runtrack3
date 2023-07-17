const mysql = require('mysql2');

// Créer une connexion à la base de données
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Clement2203$',
  database: 'utilisateurs'
});

// Effectuer une requête SELECT à la base de données
connection.promise().query('SELECT * FROM users')
  .then(([rows, fields]) => {
    // Traiter les résultats de la requête
    console.log(rows); // Résultats de la requête
  })
  .catch(error => {
    // Gérer les erreurs
    console.error('Erreur lors de l\'exécution de la requête :', error);
  })
  .finally(() => {
    // Fermer la connexion à la base de données
    connection.end();
  });
