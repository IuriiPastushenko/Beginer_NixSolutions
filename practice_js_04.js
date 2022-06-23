// Практика JS 4.
// Дан массив ['Саша', 'Петя', 'Оксана'], сделайте из него ['Оксанa', 'Олег', 'Саша']. Реализуйте эту задачу, двумя способами. В первом исходный массив должен быть изменен, во втором - не должен быть изменен.

// array is changed
let arrayofNamesVariantOne  = ['Саша', 'Петя', 'Оксана'];
arrayofNamesVariantOne[1] = 'Олег';
arrayofNamesVariantOne.sort();
console.log(arrayofNamesVariantOne)

// array isn't changed
let arrayofNamesVariantTwo  = ['Саша', 'Петя', 'Оксана'];
let result  = arrayofNamesVariantTwo.concat('Олег').sort()
result.splice(2,1);
console.log(result);
