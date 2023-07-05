const button2 = document.getElementById("button2");
const button = document.getElementById("button");
const text = document.getElementById("text");

button.addEventListener("click", function() {
    text.style.display = "block";
    button.style.display = "none";
    button2.style.display = "block";
});

button2.addEventListener("click", function() {
    text.style.display = "none";
    button.style.display = "block"; 
    button2.style.display = "none";
});

