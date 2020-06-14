let longestWord = (string) => {
  let words = string.split(' ');
  let longWord = '';

  for (let i = 0; i < words.length; i += 1) {
    if (words[i].length > longWord.length) {
      longWord = words[i];
    }
  }
  return longWord;
}

console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu"));
    
