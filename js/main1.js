document.getElementById("btn_couleur").addEventListener("click", function() {
    let changer_couleur = document.getElementById("selection").value; 
    document.querySelector(".ex1").style.backgroundColor = changer_couleur;
});

document.getElementById("btn-taille").addEventListener("click", function() {
    let newLength = document.getElementById("len").value; 
    let newWidth = document.getElementById("lar").value;

    if (newLength && newWidth) {
        document.querySelector(".ex1").style.width = newWidth + "px";
        document.querySelector(".ex1").style.height = newLength + "px";
    } else {
        alert("Veuillez entrer une longueur et une largeur valides.");
    }
});

document.getElementById("supp").addEventListener("click", function() {
    let div = document.querySelector(".ex1");
    let bouton = document.getElementById("supp");

    if (div.style.display === "none") {
        div.style.display = "block";
        bouton.textContent = "Cacher";
    } else {
        div.style.display = "none";
        bouton.textContent = "Afficher";
    }
});