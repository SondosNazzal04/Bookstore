let availableBooks = ["Clean Code", "JS for Beginners", "C# in Depth", "Web Design"];
let bookPrices = [20, 15, 30, 10];
let availableGenres = ['Fiction', 'Science', 'History', 'Biography'];

let username;
let membership;
let prefrence;
let borrowedBook;
let informationArray;
let cartBooks = [];
let cartPrices = [];
let total = 0;

let form = document.querySelector('form');

form.addEventListener('submit', (event) => {
	username = document.querySelector('#name-input').value;
	membership = document.querySelector('#member-radio').checked ?
	document.querySelector('#member-radio').value :
	document.querySelector('#student-radio').checked ?
	document.querySelector('#student-radio').value : null;
	prefrence = document.querySelector('#book-genre').value;
	borrowedBook = document.querySelector('#book-title').value;


	welcomeUser(username, membership);
	alert(borrowedBook + ' book is being reserved!');

	informationArray = [username, membership, prefrence, borrowedBook];
	informationArray = applyDiscount(informationArray);

	printInformation(informationArray);


	[cartBooks, cartPrices] = startShopping();

	total = calculateTotal(cartPrices, membership);
	printRecipt();

});

function addNewGenre(genre)
{
	availableGenres.push(genre);
}

function displayGenres()
{
	for (let i = 0; i < availableGenres.length; i++)
		console.log('- We offer: ' + availableGenres[i]);
}

function startShopping()
{
	let cartBooks = [];
	let cartPrices = [];

	let bookName = prompt('Please Enter a book name:\nWrite checkout to finish');
	while (bookName != 'checkout')
	{
		let index = availableBooks.indexOf(bookName);
		if (index != -1)
		{
			cartBooks.push(availableBooks[index]);
			cartPrices.push(bookPrices[index]);
		}
		else
			alert('Book is out of stock.');
		bookName = prompt('Please Enter a book name:\nWrite checkout to finish');
	}
	return [cartBooks, cartPrices];
}

function calculateTotal(pricesArray, membershipType)
{
	let sum = 0;
	let total = 0;
	for (let i = 0; i < pricesArray.length; i++)
	{
		sum += pricesArray[i];
	}
	if (membershipType == 'student')
		total = sum - sum * 0.2;
	else
		total = sum;
	return total;
}

function printRecipt()
{
	console.log('user ' + username + ', with membership ' + membership);
	console.log('items number: ' + cartBooks.length);
	for (let i = 0; i < cartBooks.length; i++)
	{
		console.log('- ' + cartBooks[i] + '\t' + cartPrices[i]);
	}
	console.log(total);
}

function checkMembership(membership)
{
	return membership != 'student' && membership != 'regular';
}

function welcomeUser(username, membership)
{
	if (membership == 'student')
		alert('Welcome Scholar ' + username);
	else
		alert('Welcome Member ' + username);
}

function printInformation(informationArray)
{
	for (let i = 0; i < informationArray.length; i++)
		console.log(informationArray[i]);
}

function applyDiscount(userData)
{
	let newUserData = userData;
	if (userData[1] == 'student')
		newUserData.push('20% Discount');
	else
		newUserData.push('No Discount');
	return newUserData;
}
