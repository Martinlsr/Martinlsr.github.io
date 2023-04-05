// Récupérer les résultats du vote
var results = JSON.parse(localStorage.getItem("results"));

// Afficher les résultats des votes
var resultsTable = document.getElementById("results");
for (var option in results) {
	var row = document.createElement("tr");
	var optionCell = document.createElement("td");
	var countCell = document.createElement("td");
	optionCell.innerText = option;
	countCell.innerText = results[option];
	row.appendChild(optionCell);
	row.appendChild(countCell);
	resultsTable.appendChild(row);
}
// Récupérer les options de vote
fetch('vote.js')
	.then(response => response.js())
	.then(options => {
		// Récupérer le menu déroulant
		const select = document.getElementById('vote-option');
		
		    // Vider le menu déroulant s'il contient déjà des options
            while (select.firstChild) {
                select.removeChild(select.firstChild);
            }
            
            // Ajouter les options au menu déroulant
            options.forEach(option => {
                const optionElement = document.createElement('option');
                optionElement.textContent = option;
                select.appendChild(optionElement);
            });
            
            // Vérifier si l'utilisateur est un administrateur
            const isAdmin = localStorage.getItem("isAdmin");
            if (isAdmin) {
                // Afficher le formulaire de vote pour les administrateurs
                const adminForm = document.createElement('form');
                adminForm.id = "admin-vote-form";
                
                const adminLabel = document.createElement('label');
                adminLabel.setAttribute('for', 'admin-vote-option');
                adminLabel.textContent = "Ajouter une option :";
                
                const adminInput = document.createElement('input');
                adminInput.type = "text";
                adminInput.id = "admin-vote-option";
                
                const adminButton = document.createElement('input');
                adminButton.type = "button";
                adminButton.value = "Ajouter";
                adminButton.addEventListener("click", addOption);
                
                adminForm.appendChild(adminLabel);
                adminForm.appendChild(adminInput);
                adminForm.appendChild(adminButton);
                resultsTable.parentElement.appendChild(adminForm);
                
                function addOption() {
                    const newOption = document.getElementById("admin-vote-option").value;
                    if (newOption) {
                        // Ajouter l'option au menu déroulant
                        const select = document.getElementById("vote-option");
                        const optionElement = document.createElement("option");
                        optionElement.textContent = newOption;
                        select.appendChild(optionElement);
                
                        // Ajouter l'option aux résultats
                        let results = JSON.parse(localStorage.getItem("results")) || {};
                        results[newOption] = 0;
                        localStorage.setItem("results", JSON.stringify(results));
                
                        // Afficher les résultats des votes
                        const resultsTable = document.getElementById("results");
                        const row = document.createElement("tr");
                        const optionCell = document.createElement("td");
                        const countCell = document.createElement("td");
                        optionCell.textContent = newOption;
                        countCell.textContent = 0;
                        row.appendChild(optionCell);
                        row.appendChild(countCell);
                        resultsTable.appendChild(row);
                
                        // Vider l'input
                        document.getElementById("admin-vote-option").value = "";
                    }
                }
            }
        });