let n = 7;
let lines = (n + 1) / 2;
let spacesLeft = lines;
let spacesRight = lines;
let lineInput = "";

for (let i = 0; i < lines; i += 1) {
	for (let column = 1; column <= n; column += 1) {
		if (i === (lines - 1)) {
			lineInput += "*";
		}
		else if (column === spacesLeft || column === spacesRight) {
			lineInput += "*";
		}
		else {
			lineInput += " ";
		}
	}
	console.log (lineInput);
	lineInput += " ";

	spacesRight -= 1;
	spacesLeft += 1;
}