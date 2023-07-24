<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://cdn.jsdelivr.net/npm/@heroicons/react@1.0.4/dist/index.min.css" rel="stylesheet">
  <script src="https://kit.fontawesome.com/d7f3d544f1.js" crossorigin="anonymous"></script>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
<form class="flex flex-col">
  <label for="nom">Nom :</label>
  <i class="fas fa-user"></i>
  <input type="text" id="nom" name="nom" placeholder="Entrez votre nom" required>

  <label for="prenom">Prénom :</label>
  <i class="fas fa-user"></i>
  <input type="text" id="prenom" name="prenom" placeholder="Entrez votre prénom" required>

  <label for="adresse">Adresse :</label>
  <i class="fas fa-home"></i>
  <input type="text" id="adresse" name="adresse" placeholder="Entrez votre adresse" required>

  <label for="mail">email :</label>
  <i class="fas fa-envelope"></i>
  <input type="email" id="mail" name="mail" placeholder="Entrez vos email" required>

  <label for="pass">Password : </label>
  <i class="fas fa-lock"></i>   
  <input type="password" id="pass" name="pass" placeholder="Entrez votre mot de pass" required>

  <label>
    <input type="radio" name="civilite" value="Monsieur">
    Monsieur
  </label>

  <label>
    <input type="radio" name="civilite" value="Madame">
    Madame
  </label>

  <label>
    <input type="radio" name="civilite" value="Mademoiselle">
    Autre
  </label>

  <input class="border-4 border-black" type="submit" value="Valider">
</form>

</body>