// Практика JS 7.
// Вес записан в переменную weight. Рекомендацию записывай строкой в переменную recommendation. Если вес до 4 кг (не включая это значение), рекомендация – 'Пора перекусить'. Если вес от 4 кг включительно до 5.5 кг включительно – 'Вес в норме'.Если вес больше 5.5 кг – 'Пора на тренировку'. В качестве условий, используй значения weight 1, 3, 4, 5, 10. Рекомендацию выводи в консоль.

let weight = 0;
let recommendation;

let arrayOfWeight = [1, 3, 4, 5, 10];
let arrayOfRecommendation = ['Пора перекусить', 'Вес в норме', 'Пора на тренировку'];

function giveRecommendation (a) {
  if (a < 4) {
    recommendation = arrayOfRecommendation[0];
    return recommendation
  };
  if ( 4 <= a && a <= 5.5) {
    recommendation = arrayOfRecommendation[1];
    return recommendation
  };
  if (a > 5.5) {
    recommendation = arrayOfRecommendation[2];
    return recommendation
  };
}

for (let key of arrayOfWeight) {
  weight = key;
  console.log(giveRecommendation(weight))
};

