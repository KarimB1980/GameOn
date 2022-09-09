function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}


//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
// Fermeture du formulaire avec un clic sur la croix 
// Recherche de la croix dans le DOM
const modalCroix = document.querySelector(".close");

// Lancement de l'évènement au clic sur la croix
modalCroix.addEventListener("click", fermetureModal);

// Fonction fermeture du formulaire
function fermetureModal() {
  modalbg.style.display = "none";
}
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------//


//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
// Contrôle des valeurs saisies dans les champs prénom, nom, E-mail, date de naissance, nombre de tournois via regex
function controleFormulaire() {
  // Contrôle du champ "Prénom" en vérifiant qu'il ne comporte que des minuscules, majuscules, tirets, espaces et 2 à 100 caractères
  document.getElementById('first').onchange = function () {
    const firstName = document.getElementById('first').value;
    if (/^[a-zA-Z \-]{2,100}$/.test(firstName)) {
      document.querySelector("#firstMessageErreur").innerHTML = "";
      return true;
    } else {
      document.getElementById('first').value = "";
      document.querySelector("#firstMessageErreur").innerHTML = "Veuillez renseigner un prénom valide (ne comportant que des minuscules, majuscules, tirets, espaces et 2 à 100 caractères maximum).";
    }
  }

  // Contrôle du champ "Nom" en vérifiant qu'il ne comporte que des minuscules, majuscules, tirets, espaces et 2 à 100 caractères
  document.getElementById('last').onchange = function () {
    const lastName = document.getElementById('last').value;
    if (/^[a-zA-Z \-]{2,100}$/.test(lastName)) {
      document.querySelector("#lastMessageErreur").innerHTML = "";
      return true;
    } else {
      document.getElementById('last').value = "";
      document.querySelector("#lastMessageErreur").innerHTML = "Veuillez renseigner un nom valide (ne comportant que des minuscules, majuscules, tirets, espaces et 2 à 100 caractères maximum).";
    }
  }

  // Contrôle du champ E-mail
  document.getElementById('email').onchange = function () {
    const Email = document.getElementById('email').value;
    if (/^[\w\.]+@([\w]+\.)+[\w]{2,4}$/.test(Email)) {
      document.querySelector("#emailMessageErreur").innerHTML = "";
      return true;
    } else {
      document.getElementById('email').value = "";
      document.querySelector("#emailMessageErreur").innerHTML = "Veuillez renseigner un email valide (respectant le format xxxx@xxx.xxx avec une terminaison de 1 à 4 caractères).";
    }
  }

  // Contrôle du champ "Date de naissance"
  document.getElementById('birthdate').onchange = function () {
    const dateNaissance = document.getElementById('birthdate').value;
    if (/^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/.test(Email)) {
      document.querySelector("#naissanceMessageErreur").innerHTML = "";
      return true;
    } else {
      document.getElementById('birthdate').value = "";
      document.querySelector("#naissanceMessageErreur").innerHTML = "Veuillez renseigner une date valide (respectant le format jj/mm/aaaa).";
    }
  }

  // Contrôle du champ "À combien de tournois GameOn avez-vous déjà participé ?"
  document.getElementById('quantity').onchange = function () {
    const nombreTournois = document.getElementById('quantity').value;
    if (/^[1-9]{0,1}[0-9]$/.test(nombreTournois)) {
      document.querySelector("#nombretournoisMessageErreur").innerHTML = "";
      return true;
    } else {
      document.getElementById('quantity').value = "";
      document.querySelector("#nombretournoisMessageErreur").innerHTML = "Veuillez saisir une valeur comprise entre 0 inclus et 99 inclus";
    }
  }
}

controleFormulaire()
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

