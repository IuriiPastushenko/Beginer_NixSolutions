// Практика JS 14.
// Удалите n восклицательных знаков в предложении слева направо. n - положительное целое число.

//  Пример кода:
  // remove("Hi!",1) => "Hi"
  // remove("Hi!",100) => "Hi"
  // remove("Hi!!!",1) => "Hi!!"
  // remove("Hi!!!",100) => "Hi"
  // remove("!Hi",1) => "Hi"
  // remove("!Hi!",1) => "Hi"
  // remove("!Hi!",100) => "Hi"

  // remove("!!!Hi !!hi!!! !hi",1) => "!!Hi !!hi!!! !hi"
  // remove("!!!Hi !!hi!!! !hi",3) => "Hi !!hi!!! !hi"
  // remove("!!!Hi !!hi!!! !hi",5) => "Hi hi!!! !hi"
  // remove("!!!Hi !!hi!!! !hi",100) => "Hi hi hi"

function remove (sentence, number) {

  let array = sentence.split('');
  if (number > array.length) number = array.length; 

  for ( let i = 0; i < array.length; i ++) {
    if (array[i] == '!') {
      array.splice(i,1)
      number -=1;
      i -=1;
    }
    if (number == 0) break;
  }
  return array.join('')
};  


console.log(remove('Hi!',1));
console.log(remove("Hi!",100));
console.log(remove("Hi!!!",1));
console.log(remove("Hi!",100));
console.log(remove("!Hi",1));
console.log(remove("!Hi!",1));
console.log(remove("!Hi!",100));
console.log(remove("!!!Hi !!hi!!! !hi",1));
console.log(remove("!!!Hi !!hi!!! !hi",3));
console.log(remove("!!!Hi !!hi!!! !hi",5));
console.log(remove("!!!Hi !!hi!!! !hi",100));

