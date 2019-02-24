/**
 * Задания по теме Объекты и массивы. Свойства и Методы.
 *
 * Прочитать:
 * Все разделы в данной теме
 * https://learn.javascript.ru/data-structures
 *
 */

/**
 * Задание 1
 *
 * Написать функцию extractPropsStartedFromA, которая принимает объект первым аргументом и вовзращает новый объект,
 * в котором содержаться все свойства принятого объекта начинающиеся с латинской буквы 'a'.
 * Второй аргумент includeCapitalA - это boolean, если он true - тогда также нужно включить все свойства начинающиеся с заглавной латинской буквы 'A'.
 * Смотри приверку, все станет ясно.
 */

function extractPropsStartedFromA (obj, includeCapitalA = false) {
  const resultObject = {}
  // Твой код здесь
  return resultObject
}

// Проверка
const ex = {
  a: 'a_value',
  barb: 'barb_value',
  Anc: 'Anc_value',
  dabr: 'dabr_value'
}
console.log(extractPropsStartedFromA(ex)) // { a: 'a_value' }
console.log(extractPropsStartedFromA(ex, true)) // { a: 'a_value', Anc: 'Anc_value' }

/**
 * Задание 2
 *
 * Написать функцию filterBadWords, которая принимает массив слов как аргумент, и возвращает новый массив,
 * в котором есть все слова из массива принятого как аргумент, кроме тех что записаны в FORBIDDEN_WORDS.
 * Игнорировать Letter Case в ходе фильтрации - то есть женщина === Женщина === ЖЕНЩИНА
 */

const FORBIDDEN_WORDS = ['лох', 'чмо', 'пидор', 'Андрей', 'женщина']
function filterBadWords (arrayOfWords = []) {
  // твой код здесь
}

// Проверка
const words = ['Лох', 'Лилия', 'Женщина', 'Марокко', 'Any']
console.log(filterBadWords(words)) // [ 'Лилия', 'Марокко', 'Any' ]

const words2 = ['ЖЕНЩИНА', 'АНДРЕЙ', 'Андрей']
console.log(filterBadWords(words2)) // []

/**
 * Задание 3
 *
 * Написать функцию floatsToIntegers, которая принимает массив чисел как аргумент, и возвращает новый массив,
 * в котором есть все числа из массива-аргумента преобразованы в целые числа, способом переданным как второй аргумент.
 * FLOOR - округление вниз
 * CEIL - округление вверх
 * ROUND - округление по умолчанию
 */

const CONVERSION_TYPES = {
  FLOOR: 'floor',
  CEIL: 'ceil',
  ROUND: 'round'
}
function floatsToIntegers (arrayOfNumbers = [], conversionType = CONVERSION_TYPES.ROUND) {
  // твой код здесь
}

// Проверка
console.log(floatsToIntegers([1.1, 10.5, 0.4, 10, 0, 555.555])) // [ 1, 11, 0, 10, 0, 556]
console.log(floatsToIntegers([1.1, 10.5, 0.4, 10, 0, 555.555], CONVERSION_TYPES.FLOOR)) // [ 1, 10, 0, 10, 0, 555]
console.log(floatsToIntegers([1.1, 10.5, 0.4, 10, 0, 555.555], CONVERSION_TYPES.CEIL)) // [ 2, 11, 1, 10, 0, 556]

/**
 * Задание 4
 * Создайте функцию truncate(str, maxlength), которая проверяет длину строки str (если str начинается или кончается пробелами - они должны быть сначала удалены),
 * и если она превосходит maxlength – заменяет конец str на "...", так чтобы ее длина стала равна maxlength.
 * Результатом функции должна быть (при необходимости) усечённая строка.
 */

function truncate (str, maxlength) {
  // твой код тут
}

console.log(truncate('Вот, что мне хотелось бы сказать на эту тему:', 20)) // "Вот, что мне хоте..."
console.log(truncate('Всем привет!', 20)) // "Всем привет!"
console.log(truncate('                  Андрей, бегом за пивом - уже почти 22!    ', 10)) // "Андрей,..."
console.log(truncate('                  Андрей, бегом за пивом - уже почти 22!    ', 40)) // "Андрей, бегом за пивом - уже почти 22!"

/**
 * Задание 5 - https://learn.javascript.ru/object-for-in последняя задача отсюда.
 * Но есть маленькое замечание - свойством объекта может быть другой объект со свойствами - числами.
 * Так вот - эти числа ТОЖЕ должны быть умножены на 2.
*/

// Функция для проверки на число
function isNumeric (n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}

// Функция для проверки на объект
function isObject (n) {
  return typeof n === 'object'
}

function multiplyNumeric (object) {
  // твой код здесь
}

// Проверка
const menu = {
  width: 200,
  height: 300,
  title: 'Main Menu',
  submenu: {
    width: 50,
    height: 40,
    title: 'SubMenu',
    barMenu: {
      width: 20
    }
  }
}
multiplyNumeric(menu)
console.log(menu)
/* должно получиться
{ width: 400,
  height: 600,
  title: 'Main Menu',
  submenu: {
    width: 100,
    height: 80,
    title: 'SubMenu',
    barMenu: { width: 40 } } }
*/

/**
 * Задание 6.
 * Написать функцию для нахождения максимального и минимального числа в массиве. Вывести в формате [min, max].
*/

function findMaxMin (arrayOfNumbers = []) {
  // Твой код тут
}

console.log(findMaxMin([1, 10, 30, 50, -100, -230])) // [-230, 50]
console.log(findMaxMin([])) // [0, 0]
console.log(findMaxMin([1000])) // [1000, 1000]

/**
 * Задание 7.
 * Написать функцию, которая принимает на вход строку и возвращает отсортированной по возрастанию.
*/

function sortStr (str = '') {
  // Твой код тут
}

console.log(sortStr('лилия')) // 'иилля'
console.log(sortStr('олег')) // 'гело'
console.log(sortStr('')) // ''
console.log(sortStr('3455231')) // '1233455'

/**
 * Задание 8.
 * Написать функцию, которая принимает на вход дату и возвращает ее в формате mm-dd-yyyy, где mm - это месяц (от 01 до 12), dd - день (от 01 до 31), yyyy - год
*/

function formatDate (date = new Date()) {
  // Твой код тут
}

console.log(formatDate(new Date(2011, 0, 1))) // '01-01-2011'
console.log(formatDate(new Date(2018, 11, 24))) // '12-24-2018'

/**
 * Задание 9
 * помотреть и порешать задачи из https://learn.javascript.ru/array-methods и https://learn.javascript.ru/array-iteration
*/
