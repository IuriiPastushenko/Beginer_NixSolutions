// Практика JS 13.
// Напишите функцию, которая преобразует шестнадцатеричное число (заданное в виде строки) в десятичное число.

//  Пример кода:
//    hexToDec('1') => 1
//    hexToDec('a') => 10
//    hexToDec('10') => 16
//    hexToDec('FF') => 255
//    hexToDec('-C') => 12

function  hexToDec(number) {
  
  return Math.abs(parseInt(number,16))

}

console.log(hexToDec('1'));
console.log(hexToDec('a'));
console.log(hexToDec('10'));
console.log(hexToDec('FF'));
console.log(hexToDec('-C'));
