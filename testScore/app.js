let addBtn = document.getElementById('add-btn');
let resultBtn = document.getElementById('result-btn');
let scoresBtn = document.getElementById('scores-btn');

let nameInput = document.getElementById('name');
let scoreInput = document.getElementById('score');

let containerDiv = document.getElementById('container-div');

let names = [];
let scores = [];

addBtn.addEventListener('click', (event) => {
	names.push(nameInput.value);
	scores.push(parseInt(scoreInput.value));
	nameInput.value = '';
	scoreInput.value = '';
});

function calculateAvarage(testScores)
{
	let sum = 0;
	for (let i = 0; i < testScores.length; i++)
		sum += parseInt(testScores[i]);
	return (sum / testScores.length);
}

function max(testScores)
{
	let max = testScores[0];
	let maxIndex = 0;
	for (let i = 1; i < testScores.length; i++)
	{
		if (max < testScores[i])
		{
			max = testScores[i];
			maxIndex = i;
		}
	}
	return maxIndex;
}

resultBtn.addEventListener('click', (event) => {
	let resultDiv = document.createElement('div');

	let resultHeader = document.createElement('h1');
	resultHeader.textContent = 'Results';
	resultDiv.appendChild(resultHeader);

	let resultParagraph = document.createElement('p');
	let avarage = calculateAvarage(scores);
	console.log(avarage);
	let maxScores = max(scores);
	resultParagraph.textContent = `Avarage Score = ${avarage}
High Score = ${names[maxScores]} with a score of ${scores[maxScores]}`;
	resultDiv.appendChild(resultParagraph);

	containerDiv.appendChild(resultDiv);
});

scoresBtn.addEventListener('click', (event) => {
	let scoresDiv = document.createElement('div');

	let scoresHeader = document.createElement('h1');
	scoresHeader.textContent = 'Scores';
	scoresDiv.appendChild(scoresHeader);

	let scoresTable = document.createElement('table');
	let tableHeader = document.createElement('tr');
	tableHeader.innerHTML = '<th> Name </th> <th> Score </th>';
	scoresTable.appendChild(tableHeader);
	for (let i = 0; i < scores.length; i++)
	{
		let tableRow = document.createElement('tr');
		let tableName = document.createElement('td');
		let tableScore = document.createElement('td');
		tableName.textContent = names[i];
		tableScore.textContent = scores[i];
		tableRow.appendChild(tableName);
		tableRow.appendChild(tableScore);
		scoresTable.appendChild(tableRow);
	}
	scoresDiv.appendChild(scoresTable);
	containerDiv.appendChild(scoresDiv);
});
