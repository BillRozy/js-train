// Доп задания

// Задание 8
/**
 *
 * Тебе дана функция sum которая возвращает сумму двух аргументов.
 * Написать функцию sumAndLogArgs которая принимает 3 аргумента - функцию суммирования, первое число, второе число,
 * логгирует первое и второе число в консоль в виде "Суммирование (первое число) и (второе число)" и возвращает их сумму.
 * Использовать знак + внутри функции sumAndlogArgs нельзя! Суммировать используя переданную как первый аргумент функцию sum.
 * Смотри примеры в проверке, станет понятнее.
 *
 */

function sum (first, second) {
  return first + second
}

function sumAndlogArgs (func, first, second) {
  // твой код здесь
}

// Проверка
const res1 = sumAndlogArgs(sum, 2, 4) // "Суммирование 2 и 4"
console.log(res1) // 6

const res2 = sumAndlogArgs(sum, 10, 3) // "Суммирование 10 и 3"
console.log(res2) // 13

const res3 = sumAndlogArgs(sum, 100, 300) // "Суммирование 100 и 300"
console.log(res3) // 400

// Задание 9
/**
 *
 * Написать функцию logArgumentTypes, которая принимает любое количество аргументов и выводит их тип каждого по очереди через запятую
 *
 */

function logArgumentTypes () {
  // твой код здесь
}

// Проверка
logArgumentTypes('Liliya', 1, false) // string, number, boolean
logArgumentTypes([], null, () => {}) // Array, null, function
logArgumentTypes() // ничего не выведется
