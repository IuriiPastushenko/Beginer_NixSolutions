// Практика JS 20.
// Необходимо реализовать функцию, которая на входе принимает массив с разными типами данных ==> ['a', 1, 2, false, 'b'], а возвращает объект, в котором эти типы данных рассортированны по ключам.

// Пример кода:
// {
//    number: [1, 2],
//    string: ['a', 'b'],
//    boolean: [false]
// }

function divideByType (array) {

  let result = {};

  for (let i = 0; i < array.length; i++) {
    let key = (typeof array[i]).toString()
    if (key in result) result[key].push(array[i])
      else {
        result[key] = [];
        result[key].push(array[i]);
      }  
  }  
  return result  
}

console.log(divideByType(['a', 1, 2, false, 'b']));