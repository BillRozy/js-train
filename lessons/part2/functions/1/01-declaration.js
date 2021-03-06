'use strict'
// Объявление
// Вариант 1

function generateWelcomeMessage () {
  return 'Привет, ученички!'
}

// Вызов
console.log(generateWelcomeMessage())

// Тип
console.log(typeof generateWelcomeMessage) // function
console.log(typeof generateWelcomeMessage()) // string

// Вариант 2
let generateStupidArray = function () {
  return ['something', 'stupid', generateWelcomeMessage]
}

// Вызов
console.log(generateStupidArray())

// Тип
console.log(generateStupidArray instanceof Function) // function
console.log(generateStupidArray() instanceof Array) // string
console.log(generateStupidArray()[2] instanceof Function) // string

// Присвоение другой переменной

let iWantOtherNameForFunc = generateStupidArray
generateStupidArray = null

console.log(iWantOtherNameForFunc())
console.log(generateStupidArray())
