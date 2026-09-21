let input = prompt();
let result = '';

for (let char of input)
{
	if (char === char.toUpperCase())
		result += char.toLowerCase();
	else
		result += char.toUpperCase();
}

alert(result);
