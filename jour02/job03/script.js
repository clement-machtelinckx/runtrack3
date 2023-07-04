let b1 = document.querySelector('button');
b1.addEventListener('click', function addone(){
    let compte = document.getElementById('compteur');
    compte.innerText ++;
    console.log(compte.innerText)
});
