// Практика JS 16.
// Напишите функцию, которая принимает в себя строку и число. Верните, в виде массива, только те слова, длинна которых превышает число.

// Пример кода:
// example('Сегодня отличный день. С самого утра мы пойдем на озеро, купаться.', 5) => ['Сегодня', 'Отличный', 'самого', 'пойдем', 'купаться']
// example('Над городом облака, коридоры, берега, проспект, река.', 7) => ['коридоры', 'проспект']


function example (sentence,number) {
  
  let array = sentence.split(" ");

  for (let i = 0; i < array.length; i++) {
    if (array[i][array[i].length - 1] == (',') || array[i][array[i].length - 1]  == ('.')){
      array[i] = array[i].split('').slice(0,(array[i].length - 1)).join('');   
    }
  }
  
  return array.filter( key => (key.length) > number);
  
}

console.log(example('Сегодня отличный день. С самого утра мы пойдем на озеро, купаться.', 5));
console.log(example('Над городом облака, коридоры, берега, проспект, река.', 7));
