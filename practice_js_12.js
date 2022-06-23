// Практика JS 12.
// Завершите функцию, которая принимает два целых числа ( a, b, где a <  b) и возвращает массив всех целых чисел между входными параметрами, включая их.

//  Пример кода:
//    between(1, 4) => [1, 2, 3, 4]
//    between(-2, 2) => [-2, -1, 0, 1, 2]
//    between(20, 25) => [20, 21, 22, 23, 24, 25]

function arrayOfAllNumbers(a, b) {

let result = [];
for (i = a; i <= b; i++) {
  result.push(i)
}
return result
}

console.log(arrayOfAllNumbers(1,4));
console.log(arrayOfAllNumbers(-2,2))
console.log(arrayOfAllNumbers(20,25))
