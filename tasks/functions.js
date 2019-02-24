/** *********************** Теория которую надо прочитать ***********************************/
// https://learn.javascript.ru/function-basics
// https://learn.javascript.ru/function-declaration-expression
// https://learn.javascript.ru/es-function    - тут прочитать разделы: Параметры по умолчанию, Функции через =>,
// https://learn.javascript.ru/recursion

/** ********************************** Задание 1 *******************************************/
// Написать функцию перемножения двух чисел. Знак * в решении использовать нельзя.

function multiply (firstNumber, secondNumber) {
if (firstNumber > 0) {
  for (firstNumber > 0; firstNumber > 1; firstNumber--) {
    secondNumber += secondNumber}
  }
  else if (firstNumber < 0) {
  for (firstNumber < 0,firstNumber < 1, firstNumber++) {
    secondNumber += secondNumber}
  }
return secondNumber}

// Проверка

console.log(multiply(10, 1)) // 10
console.log(multiply(1, 10)) // 10
console.log(multiply(0, 100)) // 0
console.log(multiply(100, 0)) // 0
console.log(multiply(-1, 200)) // -200
console.log(multiply(-1, -200)) // 200

/** ********************************** Задание 2 *******************************************/
// Написать функцию, выводящую в консоль переданные в нее аргументы через запятую, в обратном порядке

function logReversedArguments () {
  const a = Array.from(arguments)
  let sum = ''
  for (let i = a.length - 1; i >= 0; i--) {
    sum = sum + a[i] + ', '
  }
  console.log(sum)
}

// Проверка

logReversedArguments(1, 2, 3) // 3, 2, 1
logReversedArguments(null, 'Andrey', 32, 71, []) // [], 71, 32, Andrey, null
logReversedArguments() // ничего не должно быть выведено в консоль

/** ********************************** Задание 3 *******************************************/
// Написать функцию, которая возвращает true, если переданный аргумент равен глобальной переменной sample.
// В противном случае присваевает глобальной переменной sample значение аргумента и возвращает false.

let sample = 'initial'

function isMatchingSample (argToTest) {
  // твой код здесь
}

// Проверка
console.log(isMatchingSample('initial')) // true
console.log(isMatchingSample('Lilia')) // false
console.log(isMatchingSample('Lilia')) // true
console.log(isMatchingSample(131)) // false
console.log(isMatchingSample(131)) // true
console.log(isMatchingSample()) // false
console.log(isMatchingSample()) // true

/** ********************************** Задание 4 *******************************************/
// Написать функцию sum, которая позволяет просуммировать 2 числа. Обрати внимание на вызов функции в проверке - функция принимает только 1 аргумент!

function sum (firstNumber = 0) {
  // твой код здесь
}

// Проверка
console.log(sum(1)(2)) // 3
console.log(sum(1)(0)) // 1
console.log(sum(34.3)(10.1)) // 44.4
console.log(sum(1)()) // 1
console.log(sum()()) // 0

/** ********************************** Задание 5 *******************************************/
// Написать функцию concat, которая складывает любое количество переданных ей строк и возвращает результат.
// Функция должна работать только если передано хотя бы 2 аргумента. Иначе вернуть "Извините я работаю только если передано хотя бы 2 аргумента"
// Функция должна проверить каждый аргумент - является ли он строкой? Если хотя бы один из аргументов не является строкой - вернуть "Извините я работаю только со строками".

const concat = function () {
  // твой код здесь
  // как проверить тип?
  // typeof "some string" === string ---> true
  // typeof 41 === string ---> false
}

// Проверка
console.log(concat('L', 'i', 'l')) // Lil
console.log(concat('L', 'i', 1)) // Извините я работаю только со строками
console.log(concat(21)) // Извините я работаю только если передано хотя бы 2 аргумента
console.log(concat(21, 42)) // Извините я работаю только со строками
console.log(concat()) // Извините я работаю только если передано хотя бы 2 аргумента
console.log(concat('Лилия', 'Программист')) // ЛилияПрограммист

/** ********************************** Задание 6 *******************************************/
// Переписать функцию generateConditionalFunction на использование if..else вместо тернарного оператора. Функциональность не должна измениться

const generateConditionalFunction = function () {
  return Math.random() * 10 > 8
    ? () => '> 8'
    : () => '< 8'
}

let count = 0
while (generateConditionalFunction()() !== '> 8') {
  count++
}
console.log('conditionalFunction вызвана ', count + 1, ' раз')

/** ********************************** Задание 7 (сложное) *******************************************/
// Написать рекурсивную функцию перемножения двух чисел. Знак * в решении использовать нельзя. Циклы использовать нельзя.
// Аргументами будут только целые положительные числа

function multiplyRecursive (firstNumber, secondNumber) {
  if (firstNumber === 0 || secondNumber === 0) return 0
  if (firstNumber === 1) return secondNumber
  if (secondNumber === 1) return firstNumber
  // твой код здесь, нужно добавить 1 строчку
}

console.log(multiplyRecursive(10, 1)) // 10
console.log(multiplyRecursive(10, 2)) // 20
console.log(multiplyRecursive(0, 2)) // 20
console.log(multiplyRecursive(2, 100)) // 200
console.log(multiplyRecursive(100, 100)) // 10000
