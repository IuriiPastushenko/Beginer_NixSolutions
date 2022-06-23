// Практика JS 5.
// Напишите скрипт, который принимает с клавиатуры 2 числа, и если первое больше второго, то выводит на экран их сумму, если же наоборот - произведение. Если числа одинаковые, выводит на экран 'числа одинаковые'.

let numberOne = + prompt('Input number №1');
let numberTwo = + prompt('Input number №2');

if( numberOne > numberTwo) {
  alert(`${numberOne + numberTwo}`)
} else 
    if( numberOne < numberTwo) {
      alert(`${numberOne * numberTwo}`)
    } else alert('These numbers is the same');



  
