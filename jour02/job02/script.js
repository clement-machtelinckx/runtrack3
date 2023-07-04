function showhide() {
    const article = document.getElementById("citation");

    if (article.style.display === "none") {
        // Si l'article est actuellement masqué, l'afficher
        article.style.display = "block";
    } else {
        // Sinon, le masquer
        article.style.display = "none";
    }
}
