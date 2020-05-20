function stringChecker(word, ending) {
    for(index = 0; index <= ending.length; index += 1) {
      let x = ending.length - index;
      let y = word.length - index;

      if (ending[x] === word[y]) {
        resultado = true;
      } else {
        resultado = false;
      }
    }
  
    console.log(resultado);
  }
  
  stringChecker('Trybe', 'be');
  stringChecker('Desenvolvimento', 'volvi');
  

