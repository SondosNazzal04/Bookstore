let usernameInput = document.querySelector('#username');
let usernameLabel = document.createElement('label');
usernameLabel.setAttribute('for', 'username');
usernameInput.required = true;
usernameLabel.textContent = 'username: ';
usernameInput.parentNode.insertBefore(usernameLabel, usernameInput);

let passwordInput = document.querySelector('#password');
let passwordLable = document.createElement('label');
passwordLable.setAttribute('for', 'password');
passwordInput.required = true;
passwordLable.textContent = 'password: ';
passwordInput.parentNode.insertBefore(passwordLable, passwordInput);

let confirmPasswordInput = document.querySelector('#confirm-password');
let confirmPasswordLable = document.createElement('label');
confirmPasswordLable.setAttribute('for', 'confirm-password');
confirmPasswordInput.required = true;
confirmPasswordLable.textContent = 'confirm password: ';
confirmPasswordInput.parentNode.insertBefore(confirmPasswordLable, confirmPasswordInput);

let btn = document.getElementById('register-btn');
// btn.disabled = true;

let errorMessage = document.createElement('p');
errorMessage.setAttribute('style', 'background-color: red; color: white;');
errorMessage.textContent = 'Password does not match the confirm password';

let successMessage = document.createElement('p');
successMessage.setAttribute('style', 'background-color: green; color: white;');
successMessage.textContent = 'You registered Successfully';

let highlightedParagraph = document.getElementById('8-char-highlight');
let resultParagraph = document.createElement('div');
let words = highlightedParagraph.textContent.split(/\s+/);
words.forEach((word) => {
	let highlightedWord = document.createElement('span');
	highlightedWord.setAttribute('style', 'background-color: yellow;');
	let normalWord = document.createElement('span');
	if (word.trim().length > 8)
	{
		highlightedWord.textContent = word + ' ';
		console.log(word.trim().length);
		resultParagraph.appendChild(highlightedWord);
	}
	else
	{
		normalWord.textContent = word + ' ';
		resultParagraph.appendChild(normalWord);
	}
});

highlightedParagraph.replaceWith(resultParagraph);

let inputFields = document.querySelectorAll('input');

inputFields.forEach((inputField) =>{
	let requiredMessage = document.createElement('p');
	requiredMessage.setAttribute('style', 'background-color: red; color: white;');
	requiredMessage.textContent = 'This Field is Required';

	btn.addEventListener('click', (event) => {
		if (inputField.value == '')
			inputField.after(requiredMessage);
		else
			requiredMessage.remove();
	});
});

btn.addEventListener('click', () => {
	confirmPasswordInput.after(successMessage);
});

confirmPasswordInput.addEventListener('input', (event) => {
	event.preventDefault();

	if (passwordInput.value != confirmPasswordInput.value)
	{
		confirmPasswordInput.after(errorMessage);
		successMessage.remove();
		// btn.disabled = true;
	}
	else
	{
		errorMessage.remove();
		// btn.disabled = false;
	}
});
