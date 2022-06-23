// Практика JS 18.
// Никаких разговоров. Никаких объяснений. Только ТЗ и результат, который должен быть. Посмотрите, что должно получиться на выходе и напишите эту функцию.

// Пример кода:
//    spacey(['kevin', 'has','no','space']) => [ 'kevin', 'kevinhas', 'kevinhasno', 'kevinhasnospace']
//    spacey(['this','cheese','has','no','holes']) => ['this','thischeese','thischeesehas','thischeesehasno','thischeesehasnoholes']

function spacey(array) {

    for(let i = 1; i <= (array.length-1); i++)
      array[i] = array[i-1].concat(array[i]);
  
  return array
  
}

console.log(spacey(['kevin', 'has','no','space']));
console.log(spacey(['this','cheese','has','no','holes']));