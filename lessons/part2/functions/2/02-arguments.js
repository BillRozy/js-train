'use strict'

function sum (first, second) {
  return first + second
}

console.log(sum(1, 2))

console.log(sum(1))

function sumSafer (first, second) {
  if (first != null && second != null) { // почему не просто if (first && second) ?
    return first + second
  }
  return 'Иди в жопу придурок, передавай ОБА аргумента!'
}

console.log(sumSafer(1, 2))

console.log(sumSafer('Лилька', ' - Программист'))

console.log(sumSafer(1))

// копирование параметров

const lilName = 'Liliya'
let lilSurname = 'Denisova'

function createFullNameInQuiteStupidManner (name, surname) {
  name = name + ' ' + surname
  return name
}

console.log(createFullNameInQuiteStupidManner(lilName, lilSurname))
console.log(lilName) // не изменилось!

// параметры по умолчанию
function maxWithDefault (first, second = -Infinity) {
  return first > second ? first : second
}

console.log(maxWithDefault(10, 13))
console.log(maxWithDefault(1))

function sumAnyArguments () {
  const argsArray = Array.from(arguments) // argument - локальная переменная которая хранит все аргументы переданные в функцию
  let sum = 0
  for (let arg of argsArray) {
    sum += arg
  }
  return sum
}

console.log(sumAnyArguments(1, 3, 2, 'Боря', 45, null, undefined))
