const voteBtn = document.getElementById('vote-btn');
const voteResult = document.getElementById('vote-result');

voteBtn.addEventListener('click', () => {
	const selectedOption = document.querySelector('input[name="vote"]:checked');

	if (selectedOption) {
		const vote = selectedOption.value;
		voteResult.textContent = `Vous avez voté pour "${vote}"`;
		selectedOption.disabled = true;
		voteBtn.disabled = true;
	} else {
		alert('Veuillez sélectionner une option de vote.');
	}
});