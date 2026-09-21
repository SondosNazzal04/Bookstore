let input = prompt();
let result = '';

result = input[0].toLowerCase();
for (let i = 1; i < input.length; i++)
{
	if (input[i] === ' ')
		continue;
	else if (input[i - 1] === ' ')
		result += input[i].toUpperCase();
	else
		result += input[i];
}

alert(result);
