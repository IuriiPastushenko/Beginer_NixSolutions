// Практика JS 19.
// Если число четное, преобразуйте его в двоичное. Если число нечетное, преобразуйте его в шестнадцатеричное.

// Пример кода:
//    evensAndOdds(2) => '10'
//    evensAndOdds(13) => 'd'

function evensAndOdds(number) {

return (number % 2) == 0 ? number.toString(2) : number.toString(16)

}

console.log(evensAndOdds(2));
console.log(evensAndOdds(13));
