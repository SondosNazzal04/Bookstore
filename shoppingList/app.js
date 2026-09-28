let input = document.getElementById('item-input');
let button = document.querySelector('button');
let list = document.querySelector('ul');

button.addEventListener('click', (event) => {
	let span = document.createElement('span');
	let item = document.createElement('li');
	let deleteButton = document.createElement('button');

	span.textContent = input.value;
	input.value = '';
	deleteButton.textContent = 'Delete';

	item.appendChild(span);
	item.appendChild(deleteButton);

	deleteButton.addEventListener('click', (event) => {
		item.remove();
	});
	list.appendChild(item);
});
