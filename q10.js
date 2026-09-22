let num = prompt('Enter a number between 1 and 100');
while (num > 100 || num < 0)
{
	num = prompt('Error: Number is out of range. Enter a number between 1 and 100');
}

alert(num);
