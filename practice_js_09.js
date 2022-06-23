// Практика JS 9.
// Напишите функцию, которая принимает в себя массив, а возвращает произведение элементов массива, умноженных по порядку друг на друга.

// Пример кода:
//    example([1, 2, 3, 4]) => 1 * 2 * 3 * 4 = 24

function multiplayMembersOfArray(a) {
return a.reduce((x,y) => x * y)
}

console.log(multiplayMembersOfArray([1,2,3,4]))