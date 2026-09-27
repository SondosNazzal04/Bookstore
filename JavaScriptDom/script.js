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
btn.addEventListener('click', (event) => {
	event.preventDefault();

	if (passwordInput.value != confirmPasswordInput.value)
	{
		let errorMessage = document.createElement('p');
		errorMessage.textContent = 'Password does not match the confirm password';
		errorMessage.setAttribute('style', 'background-color: red; color: white;');
		errorMessage.setAttribute('id', 'error-message');
		confirmPasswordInput.after(errorMessage);
	}
});
