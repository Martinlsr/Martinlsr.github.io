// Options de vote
var options = [
];

// Récupérer le formulaire
var voteForm = document.getElementById("vote-form");

// Récupérer le select pour les options de vote
var voteOptionSelect = document.getElementById("vote-option");

// Ajouter les options de vote au select
for (var i = 0; i < options.length; i++) {
	var option = options[i];
	var optionElement = document.createElement("option");
	optionElement.value = option;
	optionElement.innerHTML = option;
	voteOptionSelect.appendChild(optionElement);
}

// Ajouter un écouteur pour le soumission du formulaire
voteForm.addEventListener("submit", function(event) {
	event.preventDefault(); // Empêcher la soumission du formulaire
	
	// Récupérer la valeur de l'option de vote choisie
	var voteOption = voteOptionSelect.value;
	
	// Récupérer le mot de passe saisi
	var votePassword = document.getElementById("vote-password").value;
	
	// Vérifier si le mot de passe est correct
	if (votePassword === password || votePassword === adminPassword) {
		// Stocker le choix de l'utilisateur dans le localStorage
		localStorage.setItem("voteOption", voteOption);
		
		// Rediriger vers la page de confirmation de vote
        if (votePassword === adminPassword) {
            window.location.href = "admin.html";
        } else {
            window.location.href = "vote-confirm.html";
        }
    }
});