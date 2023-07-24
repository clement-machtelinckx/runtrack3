const citations = [
    "J'ai vu tant de choses, que vous, humains, ne pourriez pas croire... De grands navires en feu surgissant de l'épaule d'Orion, j'ai vu des rayons fabuleux, des rayons C, briller dans l'ombre de la Porte de Tannhaüser. Tous ces moments se perdront dans l'oubli, comme les larmes dans la pluie. Il est temps de mourir.",
    "T'endors pas, c'est l'heure de mourir.",
    "C'est dommage qu'elle doive mourir, mais on en est tous là !",
    // Ajoutez d'autres citations ici
  ];

  // Obtenez une référence au bouton
const rebootBtn = document.getElementById("rebootBtn");

// Gestionnaire d'événement pour le clic sur le bouton
rebootBtn.addEventListener("click", function() {
  // Sélectionnez une citation aléatoire du tableau
  const randomIndex = Math.floor(Math.random() * citations.length);
  const randomCitation = citations[randomIndex];

  // Mettez à jour le texte du jumbotron avec la citation aléatoire
  const jumbotronText = document.getElementById("jumbotronText");
  jumbotronText.textContent = randomCitation;
});

const pagesContent = [
    {
      title: "Page 1",
      content: "YOYOYO"
    },
    {
      title: "Page 2",
      content: "Contenu de la page 2..."
    },
    {
      title: "Page 3",
      content: "Contenu de la page 3..."
    },
    // Ajoutez d'autres pages ici
  ];
  
// Obtenez une référence à la pagination
const paginationLinks = document.querySelectorAll(".page-link");

// Gestionnaire d'événement pour chaque lien de pagination
paginationLinks.forEach((link, index) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();

    // Mettez à jour le contenu du jumbotron en fonction de la page sélectionnée
    const jumbotron = document.getElementById("myJumbotron");
    const jumbotronTitle = jumbotron.querySelector("h1");
    const jumbotronText = jumbotron.querySelector(".lead");

    jumbotronTitle.textContent = pagesContent[index].title;
    jumbotronText.textContent = pagesContent[index].text;
  });
});

const listItems = document.querySelectorAll(".list-group-item");

listItems.forEach(item => {
    item.addEventListener("click", function() {
        // Retirez la classe "active" de tous les éléments de la liste
        listItems.forEach(item => item.classList.remove("active"));

        // Rendez l'élément actuellement cliqué comme étant actif
        this.classList.add("active");
    });
});
