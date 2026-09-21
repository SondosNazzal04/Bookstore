let birthyear = prompt('enter your birth year:');
let age = 2026 - birthyear;

if (age > 60)
{
	alert('You may join the seniors\' program.');
}
else if (age > 30)
{
	alert('You are not eligible. You may join other programs.');
}
else if (age >= 18 && age <= 30)
{
	alert('You are eligible. Start your application.');
}
else if (age < 18)
{
	alert('You may join the kids\' program.');
}
