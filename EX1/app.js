let username = prompt("Please enter your name:");
let membership = prompt("Please eneter your membership type:");
membership = membership.toLowerCase();

alert(membership === 'student'? 'Welcome Scholar ' + username :
	membership === 'regular'? 'Welcome Member ' + username:
	'Welcome ' + username);

let prefrence = prompt("Do you prefer fiction or non-fiction book genre");
let borrowedBook = prompt("Please enter the title of the book that you want to borrow:");
alert(borrowedBook + ' book is being reserved!');
console.log(username + ' borrowed ' + borrowedBook);
