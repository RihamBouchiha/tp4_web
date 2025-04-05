document.getElementById("btn_couleur").addEventListener("click", function() {
    let changer_couleur = document.getElementById("selection").value; 
    document.querySelector(".ex1").style.backgroundColor = changer_couleur;
});

document.getElementById("btn-taille").addEventListener("click", function() {
    let new_len = document.getElementById("len").value;
    let new_lar = document.getElementById("lar").value;

    document.querySelector(".ex1").style.width = new_len + "px";
    document.querySelector(".ex1").style.height = new_lar + "px";
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
/*document.getElementById("monBouton").addEventListener("click", () => {
    fonction1();
    fonction2();
  });*/