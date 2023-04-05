// Options de vote
var options = [
];

// Récupérer le formulaire
var voteForm = document.getElementById("vote-form");

function getVoteOptions() {
    fetch("vote.json")
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            options = data;
            const voteOptionSelect = document.getElementById("vote-option");
            // Vider le select
            voteOptionSelect.innerHTML = "";
            // Ajouter les options de vote au select
            for (var i = 0; i < options.length; i++) {
                var option = options[i];
                var optionElement = document.createElement("option");
                optionElement.value = option;
                optionElement.innerHTML = option;
                voteOptionSelect.appendChild(optionElement);
            }
        });
}