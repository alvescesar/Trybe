function palindrome(word) {
	let reverse = "";

	for (i = word.length - 1; i >= 0; i -= 1) {
			reverse += word[i];
	}
	if (word === reverse) {
		console.log("True");
	} else {
		console.log("False");
	}
}

palindrome("arara");
palindrome("desenvolvimento");
