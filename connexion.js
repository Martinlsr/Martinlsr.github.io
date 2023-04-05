// Stockage des mots de passe
var passwords = {
	"AdminRomeo2323": "admin.html",
	"eleve123": "vote.html"
	};
	
	// Récupération de la valeur de l'input de mot de passe
	var password = document.getElementById("password").value;
	
	// Vérification du mot de passe
	if (passwords.hasOwnProperty(password)) {
	window.location.href = passwords[password];
	} else {
	alert("Mot de passe incorrect !");
	}