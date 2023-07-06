const button = document.getElementById("button");
const pElement = document.getElementById("result");

button.addEventListener("click", function(){
    fetch("expression.txt")
    .then(response => response.text())
    .then(data => {
        pElement.textContent = data;
    })
    .catch(error => {
        console.error("Erreur : " + error);
    });
})