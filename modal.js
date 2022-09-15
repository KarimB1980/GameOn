function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function initialisation() {
// Création du formulaire
  function creationFormulaire() {

    let FormulaireDansLocalstorage = JSON.parse(localStorage.getItem("formulaire"));

    if (localStorage.getItem("formulaire") == null) {

    let formulaireDansLocalstorage = [];
    let valeursFormulaire = {
      Prenom: '',
      Nom: '',
      Email: '',
      DateDeNaissance: '',
      NombreDeTournois: '',
      Tournoi: '',
      ConditionsUtilisation: '',
      ProchainsEvenements: ''
    }
    formulaireDansLocalstorage.push(valeursFormulaire);
    localStorage.setItem("formulaire", JSON.stringify(formulaireDansLocalstorage));

    formulairehtmlSansVariables()
    }

    else if (localStorage.getItem("formulaire") != null) {

      donneesFormulaire = localStorage.getItem("formulaire")

      formulairehtmlAvecVariables()
    }

    function formulairehtmlSansVariables() {
      let formulairehtml = '';

      formulairehtml += `<div class="content">`;
      formulairehtml += `<span class="close"></span>`;
      formulairehtml += `<div class="modal-body">`;
      formulairehtml += `<div class="formData">`;
      formulairehtml += `<label for="first">Prénom</label><br>`;
      formulairehtml += `<input class="text-control" type="text" id="first" name="first" minlength="2" required /><br>`;
      formulairehtml += `<p id="firstMessageErreur"></p>`;
      formulairehtml += `</div>`;
      formulairehtml += `<div class="formData">`;
      formulairehtml += `<label for="last">Nom</label><br>`;
      formulairehtml += `<input class="text-control" type="text" id="last" name="last" minlength="2" required="required" /><br>`;
      formulairehtml += `<p id="lastMessageErreur"></p>`;
      formulairehtml += `</div>`;
      formulairehtml += `<div class="formData">`;
      formulairehtml += `<label for="email">E-mail</label><br>`;
      formulairehtml += `<input class="text-control" type="email" id="email" name="email" required="required" /><br>`;
      formulairehtml += `<p id="emailMessageErreur"></p>`;
      formulairehtml += `</div>`;
      formulairehtml += `<div class="formData">`;
      formulairehtml += `<label for="birthdate">Date de naissance</label><br>`;
      formulairehtml += `<input class="text-control" id="birthdate" name="birthdate" required="required" /><br>`;
      formulairehtml += `<p id="naissanceMessageErreur"></p>`;
      formulairehtml += `</div>`;
      formulairehtml += `<div class="formData">`;
      formulairehtml += `<label for="quantity">À combien de tournois GameOn avez-vous déjà participé ?</label><br>`;
      formulairehtml += `<input type="number" class="text-control" id="quantity" name="quantity" min="0" max="99" required="required">`;
      formulairehtml += `</div>`;
      formulairehtml += `<p id="nombretournoisMessageErreur"></p>`;
      formulairehtml += `<p class="text-label">A quel tournoi souhaitez-vous participer cette année ?</p>`;
      formulairehtml += `<div class="formData">`;
      formulairehtml += `<input class="checkbox-input" type="radio" id="location1" name="location" value="New York"/>`;
      formulairehtml += `<label class="checkbox-label" for="location1"><span class="checkbox-icon"></span>New York</label>`;
      formulairehtml += `<input class="checkbox-input" type="radio" id="location2" name="location" value="San Francisco"/>`;
      formulairehtml += `<label class="checkbox-label" for="location2"><span class="checkbox-icon"></span>San Francisco</label>`;
      formulairehtml += `<input class="checkbox-input" type="radio" id="location3" name="location" value="Seattle"/>`;
      formulairehtml += `<label class="checkbox-label" for="location3"><span class="checkbox-icon"></span>Seattle</label>`;
      formulairehtml += `<input class="checkbox-input" type="radio" id="location4" name="location" value="Chicago"/>`;
      formulairehtml += `<label class="checkbox-label" for="location4"><span class="checkbox-icon"></span>Chicago</label>`;
      formulairehtml += `<input class="checkbox-input" type="radio" id="location5" name="location" value="Boston"/>`;
      formulairehtml += `<label class="checkbox-label" for="location5"><span class="checkbox-icon"></span>Boston</label>`;
      formulairehtml += `<input class="checkbox-input" type="radio" id="location6" name="location" value="Portland"/>`;
      formulairehtml += `<label class="checkbox-label" for="location6"><span class="checkbox-icon"></span>Portland</label>`;
      formulairehtml += `<p id="tournoisMessageErreur"></p>`;
      formulairehtml += `</div>`;
      formulairehtml += `<div class="formData">`;
      formulairehtml += `<input class="checkbox-input" type="checkbox" id="checkbox1" required="required"/>`;
      formulairehtml += `<label class="checkbox2-label" for="checkbox1"><span class="checkbox-icon"></span>J'ai lu et accepté les conditions d'utilisation.</label><br>`;
      formulairehtml += `<input class="checkbox-input" type="checkbox" id="checkbox2"/>`;
      formulairehtml += `<label class="checkbox2-label" for="checkbox2"><span class="checkbox-icon"></span>Je souhaite être prévenu des prochains évènements.</label>`;
      formulairehtml += `<p id="conditionsMessageErreur"></p>`;
      formulairehtml += `</div>`;
      formulairehtml += `<input class="btn-submit" type="submit" value="C'est parti"/>`;
      formulairehtml += `</div>`;

        // Injection du nouveau code html dans le DOM
      document.querySelector('.bground').innerHTML = formulairehtml;
    }

    function formulairehtmlAvecVariables() {
      let formulairehtml = '';

      formulairehtml += `<div class="content">`;
      formulairehtml += `<span class="close"></span>`;
      formulairehtml += `<div class="modal-body">`;
      formulairehtml += `<div class="formData">`;
      formulairehtml += `<label for="first">Prénom</label><br>`;
      formulairehtml += `<input class="text-control" type="text" id="first" name="first" minlength="2" value="${FormulaireDansLocalstorage[0].Prenom}" required /><br>`;
      formulairehtml += `<p id="firstMessageErreur"></p>`;
      formulairehtml += `</div>`;
      formulairehtml += `<div class="formData">`;
      formulairehtml += `<label for="last">Nom</label><br>`;
      formulairehtml += `<input class="text-control" type="text" id="last" name="last" minlength="2" value="${FormulaireDansLocalstorage[0].Nom}" required="required" /><br>`;
      formulairehtml += `<p id="lastMessageErreur"></p>`;
      formulairehtml += `</div>`;
      formulairehtml += `<div class="formData">`;
      formulairehtml += `<label for="email">E-mail</label><br>`;
      formulairehtml += `<input class="text-control" type="email" id="email" name="email" value="${FormulaireDansLocalstorage[0].Email}" required="required" /><br>`;
      formulairehtml += `<p id="emailMessageErreur"></p>`;
      formulairehtml += `</div>`;
      formulairehtml += `<div class="formData">`;
      formulairehtml += `<label for="birthdate">Date de naissance</label><br>`;
      formulairehtml += `<input class="text-control" id="birthdate" name="birthdate" value="${FormulaireDansLocalstorage[0].DateDeNaissance}" required="required" /><br>`;
      formulairehtml += `<p id="naissanceMessageErreur"></p>`;
      formulairehtml += `</div>`;
      formulairehtml += `<div class="formData">`;
      formulairehtml += `<label for="quantity">À combien de tournois GameOn avez-vous déjà participé ?</label><br>`;
      formulairehtml += `<input type="number" class="text-control" id="quantity" name="quantity" min="0" max="99" value="${FormulaireDansLocalstorage[0].NombreDeTournois}" required="required">`;
      formulairehtml += `</div>`;
      formulairehtml += `<p id="nombretournoisMessageErreur"></p>`;
      formulairehtml += `<p class="text-label">A quel tournoi souhaitez-vous participer cette année ?</p>`;
      formulairehtml += `<div class="formData">`;
      formulairehtml += `<input class="checkbox-input" type="radio" id="location1" name="location" value="New York"/>`;
      formulairehtml += `<label class="checkbox-label" for="location1"><span class="checkbox-icon"></span>New York</label>`;
      formulairehtml += `<input class="checkbox-input" type="radio" id="location2" name="location" value="San Francisco"/>`;
      formulairehtml += `<label class="checkbox-label" for="location2"><span class="checkbox-icon"></span>San Francisco</label>`;
      formulairehtml += `<input class="checkbox-input" type="radio" id="location3" name="location" value="Seattle"/>`;
      formulairehtml += `<label class="checkbox-label" for="location3"><span class="checkbox-icon"></span>Seattle</label>`;
      formulairehtml += `<input class="checkbox-input" type="radio" id="location4" name="location" value="Chicago"/>`;
      formulairehtml += `<label class="checkbox-label" for="location4"><span class="checkbox-icon"></span>Chicago</label>`;
      formulairehtml += `<input class="checkbox-input" type="radio" id="location5" name="location" value="Boston"/>`;
      formulairehtml += `<label class="checkbox-label" for="location5"><span class="checkbox-icon"></span>Boston</label>`;
      formulairehtml += `<input class="checkbox-input" type="radio" id="location6" name="location" value="Portland"/>`;
      formulairehtml += `<label class="checkbox-label" for="location6"><span class="checkbox-icon"></span>Portland</label>`;
      formulairehtml += `<p id="tournoisMessageErreur"></p>`;
      formulairehtml += `</div>`;
      formulairehtml += `<div class="formData">`;
      formulairehtml += `<input class="checkbox-input" type="checkbox" id="checkbox1" required="required"/>`;
      formulairehtml += `<label class="checkbox2-label" for="checkbox1"><span class="checkbox-icon"></span>J'ai lu et accepté les conditions d'utilisation.</label><br>`;
      formulairehtml += `<input class="checkbox-input" type="checkbox" id="checkbox2"/>`;
      formulairehtml += `<label class="checkbox2-label" for="checkbox2"><span class="checkbox-icon"></span>Je souhaite être prévenu des prochains évènements.</label>`;
      formulairehtml += `<p id="conditionsMessageErreur"></p>`;
      formulairehtml += `</div>`;
      formulairehtml += `<input class="btn-submit" type="submit" value="C'est parti"/>`;
      formulairehtml += `</div>`;

        // Injection du nouveau code html dans le DOM
      document.querySelector('.bground').innerHTML = formulairehtml;

      // Injection du tournoi précédemment sélectionné dans le DOM
      if (FormulaireDansLocalstorage[0].Tournoi == "New York") {
        document.getElementById('location1').checked = true;
        document.querySelector("#tournoisMessageErreur").innerHTML = "";
      }
      if (FormulaireDansLocalstorage[0].Tournoi == "San Francisco") {
        document.getElementById('location2').checked = true;
        document.querySelector("#tournoisMessageErreur").innerHTML = "";
      }
      if (FormulaireDansLocalstorage[0].Tournoi == "Seattle") {
        document.getElementById('location3').checked = true;
        document.querySelector("#tournoisMessageErreur").innerHTML = "";
      }
      if (FormulaireDansLocalstorage[0].Tournoi == "Chicago") {
        document.getElementById('location4').checked = true;
        document.querySelector("#tournoisMessageErreur").innerHTML = "";
      }
      if (FormulaireDansLocalstorage[0].Tournoi == "Boston") {
        document.getElementById('location5').checked = true;
        document.querySelector("#tournoisMessageErreur").innerHTML = "";
      }
      if (FormulaireDansLocalstorage[0].Tournoi == "Portland") {
        document.getElementById('location6').checked = true;
        document.querySelector("#tournoisMessageErreur").innerHTML = "";
      }

      // Injection de l'état de la case des conditions d'utilisation dans le DOM
      if (FormulaireDansLocalstorage[0].ConditionsUtilisation == true) {
        document.getElementById('checkbox1').checked = true;
        document.querySelector("#conditionsMessageErreur").innerHTML = "";
      }

      // Injection de l'état de la case des conditions d'utilisation dans le DOM
      if (FormulaireDansLocalstorage[0].ProchainsEvenements == true) {
        document.getElementById('checkbox2').checked = true;
      }    
    }
  } 

  creationFormulaire()
  
  // Création de la variable valeur pour contrôle de la sélection d'un tournoi
  var valeur = "";

  // DOM Elements
  const modalbg = document.querySelector(".bground");
  const modalBtn = document.querySelectorAll(".modal-btn");

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
    // Contrôle que le champ "Prénom" n'est pas vide
    if (document.getElementById('first').value == "") {
      document.querySelector("#firstMessageErreur").innerHTML = "Veuillez renseigner un prénom valide (ne comportant que des minuscules, majuscules, tirets, espaces et 2 à 100 caractères maximum).";
      // Contour de couleur rouge du champ "Prénom"
      document.getElementById('first').style.border="2px solid #e54858";
    }

    // Contrôle du champ "Prénom" en vérifiant qu'il ne comporte que des minuscules, majuscules, tirets, espaces et 2 à 100 caractères
    document.getElementById('first').onchange = function prenom() {
      const firstName = document.getElementById('first').value;
      if (/^[a-zA-Z \-]{2,100}$/.test(firstName)) {
        // Masquage du coutour de couleur rouge du champ "Prénom"
        document.getElementById('first').style.border="0px solid #e54858";
        // Effacement du message d'erreur
        document.querySelector("#firstMessageErreur").innerHTML = "";

        localStorageFormulaire();

      } else {
        // Effacement de la valeur fausse
        document.getElementById('first').value = "";
        // Contour de couleur rouge du champ "Prénom"
        document.getElementById('first').style.border="2px solid #e54858";
        // Affichage du message d'erreur sous le champ "Prénom"
        document.querySelector("#firstMessageErreur").innerHTML = "Veuillez renseigner un prénom valide (ne comportant que des minuscules, majuscules, tirets, espaces et 2 à 100 caractères maximum).";
      }
    }


    // Contrôle que le champ "Nom" n'est pas vide
    if (document.getElementById('last').value == "") {
      document.querySelector("#lastMessageErreur").innerHTML = "Veuillez renseigner un nom valide (ne comportant que des minuscules, majuscules, tirets, espaces et 2 à 100 caractères maximum).";
      // Contour de couleur rouge du champ "Nom"
      document.getElementById('last').style.border="2px solid #e54858";
    }
    // Contrôle du champ "Nom" en vérifiant qu'il ne comporte que des minuscules, majuscules, tirets, espaces et 2 à 100 caractères
    document.getElementById('last').onchange = function nom() {
      const lastName = document.getElementById('last').value;
      if (/^[a-zA-Z \-]{2,100}$/.test(lastName)) {
        // Masquage du coutour de couleur rouge du champ "Nom"
        document.getElementById('last').style.border="0px solid #e54858";
        // Effacement du message d'erreur
        document.querySelector("#lastMessageErreur").innerHTML = "";

        localStorageFormulaire();

      } else {
        // Effacement de la valeur fausse
        document.getElementById('last').value = "";
        // Contour de couleur rouge du champ "Nom"
        document.getElementById('last').style.border="2px solid #e54858";
        // Affichage du message d'erreur sous le champ "Nom"
        document.querySelector("#lastMessageErreur").innerHTML = "Veuillez renseigner qu'un E-mail valide (ne comportant que des minuscules, majuscules, tirets, espaces et 2 à 100 caractères maximum).";
      }
    }

    // Contrôle que le champ "E-mail" n'est pas vide
    if (document.getElementById('email').value == "") {
      document.querySelector("#emailMessageErreur").innerHTML = "Veuillez renseigner qu'un E-mail valide (ne comportant que des minuscules, majuscules, tirets, espaces et 2 à 100 caractères maximum).";
      // Contour de couleur rouge du champ "E-mail"
      document.getElementById('email').style.border="2px solid #e54858";
    }
    // Contrôle du champ E-mail
    document.getElementById('email').onchange = function email() {
      const Email = document.getElementById('email').value;
      if (/^[\w\.]+@([\w]+\.)+[\w]{2,4}$/.test(Email)) {
        // Masquage du coutour de couleur rouge du champ "E-mail"
        document.getElementById('email').style.border="0px solid #e54858";
        // Effacement du message d'erreur
        document.querySelector("#emailMessageErreur").innerHTML = "";

        localStorageFormulaire();

      } else {
        // Effacement de la valeur fausse
        document.getElementById('email').value = "";
        // Contour de couleur rouge du champ "E-mail"
        document.getElementById('email').style.border="2px solid #e54858";
        // Affichage du message d'erreur sous le champ "E-mail"
        document.querySelector("#emailMessageErreur").innerHTML = "Veuillez renseigner un email valide (respectant le format xxxx@xxx.xxx avec une terminaison de 2 à 4 caractères).";
      }
    }

    // Contrôle que le champ "Date de naissance" n'est pas vide
    if (document.getElementById('birthdate').value == "") {
      document.querySelector("#naissanceMessageErreur").innerHTML = "Veuillez renseigner une date de naissance valide (respectant le format jj/mm/aaaa).";
      // Contour de couleur rouge du champ "Date de naissance"
      document.getElementById('birthdate').style.border="2px solid #e54858";
    }
    // Contrôle du champ "Date de naissance"
    document.getElementById('birthdate').onchange = function naissance() {
      const dateNaissance = document.getElementById('birthdate').value;
      if (/^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/.test(dateNaissance)) {
        // Masquage du coutour de couleur rouge du champ "Date de naissance"
        document.getElementById('birthdate').style.border="0px solid #e54858";
        // Effacement du message d'erreur
        document.querySelector("#naissanceMessageErreur").innerHTML = "";

        localStorageFormulaire();

      } else {
        // Effacement de la valeur fausse
        document.getElementById('birthdate').value = "";
        // Contour de couleur rouge du champ "Date de naissance"
        document.getElementById('birthdate').style.border="2px solid #e54858";
        // Affichage du message d'erreur sous le champ "Date de naissance"
        document.querySelector("#naissanceMessageErreur").innerHTML = "Veuillez renseigner une date de naissance valide (respectant le format jj/mm/aaaa).";
      }
    }

    // Contrôle que le champ "À combien de tournois GameOn avez-vous déjà participé ?" n'est pas vide
    if (document.getElementById('quantity').value == "") {
      document.querySelector("#nombretournoisMessageErreur").innerHTML = "Veuillez saisir une valeur comprise entre 0 inclus et 99 inclus.";
      // Coutour de couleur rouge du champ "À combien de tournois GameOn avez-vous déjà participé ?"
      document.getElementById('quantity').style.border="2px solid #e54858";
    }
    // Contrôle du champ "À combien de tournois GameOn avez-vous déjà participé ?"
    document.getElementById('quantity').onchange = function nombretournois() {
      const nombreTournois = document.getElementById('quantity').value;
      if (/^[1-9]{0,1}[0-9]$/.test(nombreTournois)) {
        // Masquage du coutour de couleur rouge du champ "À combien de tournois GameOn avez-vous déjà participé ?"
        document.getElementById('quantity').style.border="0px solid #e54858";
        // Effacement du message d'erreur
        document.querySelector("#nombretournoisMessageErreur").innerHTML = "";

        localStorageFormulaire();

      } else {
        // Effacement de la valeur fausse
        document.getElementById('quantity').value = "";
        // Coutour de couleur rouge du champ "À combien de tournois GameOn avez-vous déjà participé ?"
        document.getElementById('quantity').style.border="2px solid #e54858";
        // Affichage du message d'erreur sous le champ "À combien de tournois GameOn avez-vous déjà participé ?"
        document.querySelector("#nombretournoisMessageErreur").innerHTML = "Veuillez saisir une valeur comprise entre 0 inclus et 99 inclus.";
      }
    }

    //-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

    // Contrôle si un tournoi a été sélectionné avant un clic sur le bouton "C'est parti"
    var radios = document.getElementsByName('location');
    for(var i = 0; i < radios.length; i++){
      if(radios[i].checked){
      valeur = radios[i].value;
      document.querySelector("#tournoisMessageErreur").innerHTML = "";
      }else if(valeur == "") {
        document.querySelector("#tournoisMessageErreur").innerHTML = "Veuillez sélectionner un tournoi parmis ceux proposés ci-dessus.";
      }
    }

    // Contrôle si un tournoi a été sélectionné après un clic sur le bouton "C'est parti" et supprime le message d'erreur si vrai
    for(var i = 1; i <= radios.length; i++){
      document.getElementById(`location${i}`).onchange = function () {
        for(var i = 0; i < radios.length; i++){
          if(radios[i].checked){
          valeur = radios[i].value;

          document.querySelector("#tournoisMessageErreur").innerHTML = "";
          }
        }  
        localStorageFormulaire();
      }
    }

    // Contrôle si la case "J'ai lu et accepté les conditions d'utilisation." est cochée
    const conditionsUtilisation = document.getElementById('checkbox1');
    // Si la case "J'ai lu et accepté les conditions d'utilisation." n'est pas cochée alors on affiche le message d'erreur
    if (!conditionsUtilisation.checked) {
      document.querySelector("#conditionsMessageErreur").innerHTML = "Veuillez cocher la case 'J'ai lu et accepté les conditions d'utilisation.'";
      document.getElementById('checkbox1').checked = false;
      localStorageFormulaire();
    }
    else {
      document.getElementById('checkbox1').checked = true;
      localStorageFormulaire();
    }
      // Si la case "J'ai lu et accepté les conditions d'utilisation." est décochée alors on affiche le message d'erreur sinon on l'efface
    document.getElementById('checkbox1').onchange = function () {
      if (!conditionsUtilisation.checked) {
        document.querySelector("#conditionsMessageErreur").innerHTML = "Veuillez cocher la case 'J'ai lu et accepté les conditions d'utilisation.'";
        document.getElementById('checkbox1').checked = false;
        localStorageFormulaire();
      }
      else {
        document.querySelector("#conditionsMessageErreur").innerHTML = "";
        document.getElementById('checkbox1').checked = true;
        localStorageFormulaire();
      }
    }

    // Contrôle si la case "Je souhaite être prévenu des prochains évènements." est cochée
    const prochainsEvenements = document.getElementById('checkbox2');
    // Si la case "Je souhaite être prévenu des prochains évènements." n'est pas cochée alors on affiche le message d'erreur
    if (!prochainsEvenements.checked) {
      document.getElementById('checkbox2').checked = false;
      localStorageFormulaire();
    }
    else {
      document.getElementById('checkbox2').checked = true;
      localStorageFormulaire();
    }
      // Si la case "Je souhaite être prévenu des prochains évènements." est décochée alors on affiche le message d'erreur sinon on l'efface
    document.getElementById('checkbox2').onchange = function () {
      if (!prochainsEvenements.checked) {
        document.getElementById('checkbox2').checked = false;
        localStorageFormulaire();
      }
      else {
        document.getElementById('checkbox2').checked = true;
        localStorageFormulaire();
      }
    }
  }
  controleFormulaire();

  function localStorageFormulaire() {
    const firstName = document.getElementById('first').value;
    const lastName = document.getElementById('last').value;
    const Email = document.getElementById('email').value;
    const dateNaissance = document.getElementById('birthdate').value;
    const nombreTournois = document.getElementById('quantity').value;
    const conditionsUtilisation = document.getElementById('checkbox1').checked;
    const prochainsEvenements = document.getElementById('checkbox2').checked;

    formulaireDansLocalstorage = [];
    let valeursFormulaire = {
      Prenom: firstName,
      Nom: lastName,
      Email: Email,
      DateDeNaissance: dateNaissance,
      NombreDeTournois: nombreTournois,
      Tournoi: valeur,
      ConditionsUtilisation: conditionsUtilisation,
      ProchainsEvenements: prochainsEvenements
    }
    formulaireDansLocalstorage.push(valeursFormulaire);
    localStorage.setItem("formulaire", JSON.stringify(formulaireDansLocalstorage));
  }

  //-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------//


  //-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
  // Ouverture du message de confirmation suite à un clic sur le bouton "C'est parti" 
  // Recherche du bouton "C'est parti" dans le DOM
  const modalParti = document.querySelector(".btn-submit");

  // Lancement de l'évènement au clic sur le bouton "C'est parti"
  modalParti.addEventListener("click", ouvertureConfirmation);

  // Fonction affichage du message de confirmation
  function ouvertureConfirmation() {

    controleFormulaire();

    const firstName = document.getElementById('first').value;
    const lastName = document.getElementById('last').value;
    const Email = document.getElementById('email').value;
    const dateNaissance = document.getElementById('birthdate').value;
    const nombreTournois = document.getElementById('quantity').value;
    const conditionsUtilisation = document.getElementById('checkbox1');

    if (firstName!= "" && lastName != "" && Email != "" && dateNaissance != "" && nombreTournois != "" && valeur != "" && conditionsUtilisation.checked) {
    
      const Donneesformulaire = document.querySelectorAll('.formData');

      for(i=0; i<Donneesformulaire.length; i++) {
        if (Donneesformulaire[i] != "") {
          Donneesformulaire[i].remove();
        }
      }
      document.querySelector('.text-label').remove();
      document.querySelector('#nombretournoisMessageErreur').remove();
      
      document.querySelector('.btn-submit').remove();

      ajoutTexte()

      localStorage.removeItem("formulaire");
    }
  }

  function ajoutTexte() {
    // Création d'un nouvel élément div class="merciInscription"
    var inscription = document.createElement("div");
    inscription.className = 'merciInscription';

    // Injection du nouvel élément créé dans le DOM comme premier enfant de la class ".modal-body"
    var divModal = document.querySelector('.modal-body');
    divModal.prepend(inscription);

    // Création d'une description composée de deux h2 pour le nouvel élément 
    let descriptionInscription = '';
    descriptionInscription += `<h2>Merci pour</h2>`;
    descriptionInscription += `<h2>votre inscription</h2>`;

    // Injection de la description dans le DOM 
    document.querySelector('.merciInscription').innerHTML = descriptionInscription;

    // Changement de valeur et de nom pour le bouton .btn-submit
    var parent = document.querySelector('.modal-body');
    var Fermer = document.createElement("input");
    Fermer.setAttribute("type", "submit");
    Fermer.setAttribute("class", "fermer");
    Fermer.setAttribute("value", "Fermer");
    parent.appendChild(Fermer);

    // Changement de valeur et de nom pour le bouton .close
    document.querySelector('.close').className = 'fermerCroix';

    const modalFermer = document.querySelector(".fermer");
    const modalFermerCroix = document.querySelector(".fermerCroix");

    // Lancement de l'évènement au clic sur le bouton "Fermer"
    modalFermer.addEventListener("click", fermetureConfirmation);

    // Fonction fermeture du message de confirmation
    function fermetureConfirmation() {
      modalbg.style.display = "none";
      initialisation()
    }

    // Lancement de l'évènement au clic sur la croix"
    modalFermerCroix.addEventListener("click", fermetureCroixConfirmation);

    // Fonction fermeture du message de confirmation
    function fermetureCroixConfirmation() {
      modalbg.style.display = "none";
      initialisation()
    }
  }

  //-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
}

initialisation()