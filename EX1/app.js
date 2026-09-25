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



let username = prompt("Please enter your name:");
let membership = prompt("Please eneter your membership type:");
availableBooks = ["Clean Code", "JS for Beginners", "C# in Depth", "Web Design"];
bookPrices = [20, 15, 30, 10];

function getValidMemebership()
{
	let validembership = membership.toLowerCase();
	while (checkMembership(validembership))
	{
		validembership = prompt('please enter your membership type:\n(student, regular)');
	}
	return validembership;
}
membership = getValidMemebership();

welcomeUser(username, membership);

let prefrence = prompt("Do you prefer fiction or non-fiction book genre");
let borrowedBook = prompt("Please enter the title of the book that you want to borrow:");
alert(borrowedBook + ' book is being reserved!');

let informationArray = [username, membership, prefrence, borrowedBook];

informationArray = applyDiscount(informationArray);
let [cartBooks, cartPrices] = startShopping();
let total = calculateTotal(cartPrices, membership);
printRecipt();

let availableGenres = ['Fiction', 'Science', 'History', 'Biography'];

printInformation(informationArray);

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
