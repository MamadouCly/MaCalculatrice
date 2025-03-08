// Selection de l'écran
const view = document.querySelector(".view");

// Accrocher un événement "click" à tous les boutons
const btns = document.querySelector(".btns");
let t = [];  // Un tableau qui va contenir le résultat de chaque bouton cliqué
btns.addEventListener("click", (even) => {
    if (even.target.tagName.toLowerCase() === "button") {
        let champ = document.createElement("span");
        champ.textContent = `${even.target.getAttribute("data-chiffre")}`
        view.appendChild(champ);
        t.push(champ.textContent);
    }
});

// Selection du bouton égal
const btnEgal = document.querySelector(".btnEgal");

// Ajout d'un gestionnaire d'événement au bouton égal pour q'il donne le resultat de l'opération effectuée
btnEgal.addEventListener("click", () => {
    // Récupération de l'index de chaque signe d'opérateur
    let indexPlus = t.indexOf("+");
    let indexMoin = t.indexOf("-");
    let indexMult = t.indexOf("x");
    let indexDivi = t.indexOf("/");

    if (indexPlus !== -1) { // On vérifie si le signe "+" est bien dans le tableau. autrement dit s'il est clicqué par l'utilisateur
        // Si c'est le cas, les codes suivants vont s'exécuter
        let result = document.createElement("span");

        let avantPlus = t.slice(0, indexPlus).join(""); // Stockage des chiffres clicqués avant le signe "+" dans la variable
        let apresPlus = t.slice(indexPlus + 1).join(""); // Stockage des chiffres clicqués après le signe "+" dans la variable

        result.textContent = `= ${Number(avantPlus) + Number(apresPlus)}`; // On les transforme en nombres pour pouvoir faire l'addition. Sinon, on fera la concatenation

        result.classList.add("viewResult"); // On lui donne la classe "viewResult" définie dans le fichier "CSS"

        view.appendChild(result); // On met le résultat dans "view" || Une "div" définie dans le fichier "HTML"
    } else if (indexMoin !== -1) {
        // La même procédure est appliquée pour faire la sustraction
        let result = document.createElement("span");

        let avantMoin = t.slice(0, indexMoin).join("");
        let apresMoin = t.slice(indexMoin + 1).join("");

        result.textContent = `= ${Number(avantMoin) - Number(apresMoin)}`;

        result.classList.add("viewResult");

        view.appendChild(result);
    } else if (indexMult !== -1) {
        // La même procédure est appliquée pour faire la multiplicatin
        let result = document.createElement("span");

        let avantMult = t.slice(0, indexMult).join("");
        let apresMult = t.slice(indexMult + 1).join("");

        result.textContent = `= ${Number(avantMult) * Number(apresMult)}`;

        result.classList.add("viewResult");

        view.appendChild(result);
    } else if (indexDivi !== -1) {
        // La même procédure est appliquée pour faire la division
        let result = document.createElement("span");

        let avansDivi = t.slice(0, indexDivi).join("");
        let apresDivi = t.slice(indexDivi + 1).join("");

        if(Number(avansDivi) !== 0 && Number(apresDivi) !== 0) {
            result.textContent = `= ${Number(avansDivi) / Number(apresDivi)}`;

            result.classList.add("viewResult");

            view.appendChild(result);
        } else {
            result.textContent = "= Impossible de diviser par 0";

            //result.classList.add("viewResult");

            view.appendChild(result);
        }
    }
});

// Sélection des boutons "supprimer"
const btnSup = document.querySelector(".btnSup");
const btnSup1 = document.getElementById("btnSup1");

// Ajout d'un gestionnaire d'événement "click" pour pouvoir supprimer des chiffres
btnSup.addEventListener("click", () => {
    view.textContent = "";
    t = []; // Vide le tableau
});

// Ajout d'un gestionnaire d'événement "click" pour pouvoir supprimer le dernoer chiffre
btnSup1.addEventListener("click", () => {
    t.pop(); // Supprime le dernier élément du tableau

    view.removeChild(view.lastChild); // Fait la mise à jour de l'écran en supprimant le dernier élément
});