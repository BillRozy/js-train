'use strict'

// неизменяемая глобальная переменная
const IMMUTABLE_THING = 1
// изменяемая глобальная переменная
let counter = 0

// 'чистая' функция - не затрагивает глобальные переменные, не имеет побочных эффектов - и это ХАРАШО
function pureFunction () {
  const innerArray = ['л', 'и', 'л', 'ь', 'к', 'а']
  console.log(innerArray.join(''))
}

pureFunction()

// попробуем вывести массив из тела чистой функции
try {
  console.log(innerArray)
} catch (err) {
  console.error(err)
}

// грязная функция - затрагивает глобальную переменную counter - это называется side-effect (и это на самом деле не всегда хорошо)

function dirtyFunction () {
  counter++
}

console.log('Счетчик до вызова грязной функции = ', counter)

dirtyFunction()

console.log('Счетчик после вызова грязной функции = ', counter)

// грязная функция - затрагивает неизменяемую глобальную переменную IMMUTABLE_THING - после вызова будет ошибка
function brokenFunction () {
  IMMUTABLE_THING = 10
}

try {
  brokenFunction()
} catch (err) {
  console.error(err)
}
