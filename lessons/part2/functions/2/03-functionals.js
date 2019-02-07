'use strict'

// Функция как параметр

function doSomethingVeryLong (onFinish, time = 5000, logForStart = 'Начало фунцкции', logForEnd = 'Конец функции') { // onFinish - callback
  console.log(logForStart)
  setTimeout(onFinish, time)
  console.log(logForEnd)
}

doSomethingVeryLong(function callback () {
  console.log(`ПРиветик от коллбэка!`)
});

// анонимная функция

(function (str) {
  console.log(`Таинственная анонимная функция которой передали строку ${str}`)
})('андрей')

// анонимная функция как коллбэк
doSomethingVeryLong(function () {
  console.log('ПРиветик от анонимного коллбэка!')
}, 2000, 'Начало фунцкции 2', 'Конец функции 2')

// ES2015 функция - стрелочка
const namedCallback = () => {
  console.log('ПРиветик от стрелочного коллбэка!')
}

// функция-стрелочка как коллбэк
doSomethingVeryLong(namedCallback, 1000, 'Начало фунцкции 3', 'Конец функции 3')

const generateConditionalFunction = function () {
  return Math.random() * 10 > 8
    ? () => '> 8'
    : () => '< 8'
}

let count = 0
while (generateConditionalFunction()() !== '> 8') { // почему скобки дважды?
  count++
}
console.log('conditionalFunction вызвана ', count + 1, ' раз')

// зачем вообще тогда именовать функции?

// рекурсия
function customPow (number, pow) {
  if (pow === 0) return 1
  if (pow % 2 === 0) {
    const m = customPow(number, pow / 2)
    return m * m
  }
  return number * customPow(number, pow - 1)
}
console.log(customPow(2, 5))
// const customPowRenamed = customPow
// customPow = null
// console.log(customPowRenamed(2, 5))

// теперь типа еще более хороший вариант
let customPow2 = function p (number, pow) {
  if (pow === 0) return 1
  if (pow % 2 === 0) {
    const m = p(number, pow / 2)
    return m * m
  }
  return number * p(number, pow - 1)
}
console.log(customPow(2, 6))
const customPowRenamed2 = customPow2
customPow2 = null
console.log(customPowRenamed2(2, 6))
