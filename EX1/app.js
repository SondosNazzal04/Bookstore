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

let username = prompt("Please enter your name:");
let membership = prompt("Please eneter your membership type:");
membership = membership.toLowerCase();

while (checkMembership(membership))
{
	membership = prompt('please enter your membership type:\n(student, regular)');
}

welcomeUser(username, membership);

let prefrence = prompt("Do you prefer fiction or non-fiction book genre");
let borrowedBook = prompt("Please enter the title of the book that you want to borrow:");
alert(borrowedBook + ' book is being reserved!');

let informationArray = [username, membership, prefrence, borrowedBook];

printInformation(informationArray);
