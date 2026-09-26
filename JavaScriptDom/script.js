let usernameInput = document.querySelector('#username');
let usernameLabel = document.createElement('label');
usernameLabel.setAttribute('for', 'username');
usernameLabel.textContent = 'username: ';
usernameInput.parentNode.insertBefore(usernameLabel, usernameInput);

let passwordInput = document.querySelector('#password');
let passwordLable = document.createElement('label');
passwordLable.setAttribute('for', 'password');
passwordLable.textContent = 'password: ';
passwordInput.parentNode.insertBefore(passwordLable, passwordInput);

let confirmPasswordInput = document.querySelector('#confirm-password');
let confirmPasswordLable = document.createElement('label');
confirmPasswordLable.setAttribute('for', 'confirm-password');
confirmPasswordLable.textContent = 'confirm password: ';
confirmPasswordInput.parentNode.insertBefore(confirmPasswordLable, confirmPasswordInput);
