// Constantes
const optionsContainer = document.querySelector('#options-container');
const addOptionButton = document.querySelector('#add-option-button');
const createPollForm = document.querySelector('#create-poll-form');
const pollTitleInput = document.querySelector('#poll-title-input');
const pollOptionsInput = document.querySelector('#poll-options-input');
const startPollButton = document.querySelector('#start-poll-button');
const stopPollButton = document.querySelector('#stop-poll-button');
const resetPollButton = document.querySelector('#reset-poll-button');
const resultsContainer = document.querySelector('#results-container');

// Tableau pour stocker les options de vote
let pollOptions = [];

// Fonction pour ajouter une option de vote
const addOption = () => {
  const optionInput = document.createElement('input');
  optionInput.setAttribute('type', 'text');
  optionInput.setAttribute('placeholder', 'Option de vote');
  optionInput.setAttribute('required', '');

  const removeButton = document.createElement('button');
  removeButton.textContent = 'Supprimer';
  removeButton.addEventListener('click', () => {
    const optionIndex = pollOptions.indexOf(optionInput.value);
    if (optionIndex > -1) {
      pollOptions.splice(optionIndex, 1);
    }
    optionsContainer.removeChild(optionInput.parentNode);
  });

  const optionDiv = document.createElement('div');
  optionDiv.classList.add('option');
  optionDiv.appendChild(optionInput);
  optionDiv.appendChild(removeButton);

  pollOptions.push(optionInput.value);

  optionsContainer.appendChild(optionDiv);
}

// Fonction pour créer un nouveau vote
const createPoll = (event) => {
  event.preventDefault();
  
  // Récupérer le titre et les options de vote
  const pollTitle = pollTitleInput.value;
  pollOptions = [...document.querySelectorAll('#options-container input[type="text"]')].map(input => input.value);

  // Créer une requête pour envoyer les données au serveur
  const request = new XMLHttpRequest();
  request.open("POST", "/admin/start-vote");
  request.setRequestHeader("Content-Type", "application/json");

  // Envoyer les options de vote au serveur
  const options = document.querySelectorAll(".option");
  const optionData = [];
  options.forEach(option => {
    optionData.push({
      text: option.querySelector("input[type='text']").value,
      count: 0
    });
  });

  const data = {
    options: optionData
  };

  request.onload = function() {
    if (request.status === 200) {
      console.log(request.responseText);
    } else {
      console.log("Une erreur est survenue");
    }
  };

  request.send(JSON.stringify(data));
};

// Créer une requête pour envoyer les données au serveur
const requestData = { options: pollOptions };
const request = new XMLHttpRequest();
request.open("POST", "/admin/start-vote");
request.setRequestHeader("Content-Type", "application/json");

request.onload = function() {
  if (request.status === 200) {
    console.log(request.responseText);
  } else {
    console.log("Une erreur est survenue");
  }
};

request.send(JSON.stringify(requestData));

// Créer une requête pour démarrer le vote
const startRequest = new XMLHttpRequest();
startRequest.open("POST", "/admin/start-vote");
startRequest.setRequestHeader("Content-Type", "application/json");

startRequest.onload = function() {
  if (startRequest.status === 200) {
    console.log(startRequest.responseText);
  } else {
    console.log("Une erreur est survenue");
  }
};

startRequest.send();

// Créer une requête pour arrêter le vote
const stopRequest = new XMLHttpRequest();
stopRequest.open("POST", "/admin/stop-vote");
stopRequest.setRequestHeader("Content-Type", "application/json");

stopRequest.onload = function() {
  if (stopRequest.status === 200) {
    console.log(stopRequest.responseText);
  } else {
    console.log("Une erreur est survenue");
  }
};

stopRequest.send();

// Créer une requête pour réinitialiser le vote
const resetRequest = new XMLHttpRequest();
resetRequest.open("POST", "/admin/reset-vote");
resetRequest.setRequestHeader("Content-Type", "application/json");

resetRequest.onload = function() {
  if (resetRequest.status === 200) {
    console.log(resetRequest.responseText);
  } else {
    console.log("Une erreur est survenue");
  }
};

resetRequest.send();