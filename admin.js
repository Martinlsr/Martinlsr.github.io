document.addEventListener("DOMContentLoaded", function() {

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
  
    function castVote() {
        // Récupérer l'option choisie
        const select = document.getElementById("vote-option");
        const selectedOption = select.options[select.selectedIndex].value;
  
        // Mettre à jour les résultats
        let results = JSON.parse(localStorage.getItem("results")) || {};
        results[selectedOption] += 1;
        localStorage.setItem("results", JSON.stringify(results));
    }
  
    // Ajouter un événement click sur le bouton de vote
    const voteButton = document.getElementById("vote-button");
    voteButton.addEventListener("click", castVote);
  
    function addOption() {
        const newOption = document.getElementById("new-option").value;
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
            optionCell.innerText = newOption;
            countCell.innerText = results[newOption];
            row.appendChild(optionCell);
            row.appendChild(countCell);
            resultsTable.appendChild(row);
  
            // Vider l'input
            document.getElementById("new-option").value = "";
  
            // Ajouter l'option au select des options de vote de la page de vote
            const voteOptionSelect = document.getElementById("vote-option");
            const optionElement2 = document.createElement("option");
            optionElement2.value = newOption;
            optionElement2.innerHTML = newOption;
            voteOptionSelect.appendChild(optionElement);
                    // Vider l'input
        document.getElementById("new-option").value = "";
    }
}
});