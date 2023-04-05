// Récupération des mots de passe depuis le stockage local
var adminPassword = localStorage.getItem("AdminRoméo2323");
var voterPassword = localStorage.getItem("eleve123");

// Gestionnaire d'événements pour le bouton "Se connecter"
document.getElementById("connect-button").addEventListener("click", function() {
	var password = document.getElementById("password").value;

	if (password === adminPassword) {
		// Rediriger vers la page d'administration
		window.location.href = "admin.html";
	} else if (password === voterPassword) {
		// Rediriger vers la page de vote
		window.location.href = "vote.html";
	} else {
		// Afficher un message d'erreur si le mot de passe est incorrect
		alert("Mot de passe incorrect !");
	}
});