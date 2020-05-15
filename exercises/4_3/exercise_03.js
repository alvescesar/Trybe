let x = 5;
let y = 5;

let string = "";

for (let i = 0; i < x; i += 1)
{
	for (let j = 0; j < y; j += 1)
	{
			if (i + j >= x)
			{
					string += "*";
			} 
			else 
			{
					string += " ";
			}
	}
	string += "\n";
}

console.log(string);

