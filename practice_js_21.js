// Практика JS 21.
// Дана строка, состоящяя из букв a,b,c. Ваша задача поменять расположение букв a и b, но не трогать c.

// Пример кода:
//    switcheroo('abc') =>'bac'
//    switcheroo('aaabcccbaaa') =>'bbbacccabbb'
//    switcheroo('ccccc') =>'ccccc'
//    switcheroo('acb') =>'bca'
//    switcheroo('aabacbaa') =>'bbabcabb'

function switcheroo(word) {

  let arrayFromWord = word.split('');

  for (let i = 0; i < arrayFromWord.length; i++) {
    switch(arrayFromWord[i]) {
    case 'a' : 
      arrayFromWord[i] = 'b';
      break;
    case 'b' : 
      arrayFromWord[i] = 'a';
      break;
    }
  };

  return arrayFromWord.join('')

}

console.log(switcheroo('abc'));
console.log(switcheroo('aaabcccbaaa'));
console.log(switcheroo('ccccc'));
console.log(switcheroo('acb'));
console.log(switcheroo('aabacbaa'));