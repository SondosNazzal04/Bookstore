let input = prompt('enter a number:');
let num = parseInt(input);
let sum = 0;
for (let i = 0; i <= num; i++)
{
	sum += i;
}
let avg = sum / (num + 1);
alert('avg = ' + avg);
