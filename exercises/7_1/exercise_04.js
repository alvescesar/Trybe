let replace = (word) => {
  let firstString = 'Tryber x here!';
  let replacedString = firstString.replace('x', word);
  return replacedString;
}

let skills = ['HTML', 'CSS', 'JavaScript', 'Git', 'React'];

let stringBuilder = (word) => {
  skills = skills.sort();
  let secondString = `${replace('Cesinha')}`;
  return `${secondString}
  My five skills are:
  ${skills[0]}
  ${skills[1]}
  ${skills[2]}
  ${skills[3]}
  ${skills[4]}`
}

console.log(stringBuilder(''));
