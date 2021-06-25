'use strict';

// Напишите функцию printNumbers(from, to, interval), которая последовательно выводит в консоль целые числа, начиная от from и заканчивая to, с интервалом между выводом соседних чисел в interval мс.
// Реализуйте первый или *оба варианта решения:
// - Используя setInterval.
// - *Используя рекурсивный setTimeout (https://learn.javascript.ru/settimeout-setinterval#rekursivnyy-settimeout).



function printNumbers(from, to, interval) {
  const intervalId = setInterval(printNumber, interval, to);
  let counter = from;
  function printNumber (to) {
    console.log(counter++);
    if (counter > to) {
      clearInterval(intervalId);
    }
  }
}

printNumbers(1, 3, 5000);

/***************************************************************/

function printNumbers2(from, to, interval) {
  let counter = from;
  function printNumber (to) {
    if (counter > to) {
      return;
    }
    console.log(counter++);
    setTimeout(printNumber, interval, to);
  }
  printNumber(to);
}

printNumbers2(1, 5, 500);