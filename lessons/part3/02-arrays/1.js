// Массив - это объект у которого свойства - это ключи в виде последовательных чисел

const realArray = ['Яблоко', 'Груша', 'Вишня']
console.log(realArray)

const myCustomArray = {
  '0': 'Яблоко',
  '1': 'Груша',
  '2': 'Вишня'
}

function printObjectAsArray (obj) {
  let resStr = '[ '
  let first = true
  for (const prop in obj) {
    if (first) {
      resStr += '\'' + obj[prop] + '\''
      first = false
    } else {
      resStr += ', ' + '\'' + obj[prop] + '\''
    }
  }
  resStr += ' ]'
  console.log(resStr)
}

printObjectAsArray(myCustomArray)

// Обращение к массиву

const arr = ['Наталия', null, { name: 'Liliya' }, function () { return 'Я на 3ей позиция в массиве' }]
console.log(arr)
console.log(arr[0])
console.log(arr[1])
console.log(arr[2])
console.log(arr[2].name)
console.log(arr[3])
console.log(arr[3]())

// Изменение конкретного элемента массива

arr[0] = 'Евгения'
console.log(arr)

// Длина массива

console.log(arr.length)

// Перебор массива

for (let value of arr) {
  console.log(value)
}

for (let i; i < arr.length; i++) {
  console.log(i + ': ' + arr[i])
}

// Методы массива

const queue = ['inital']
// Добавить элемент в конец массива
queue.push('pushed')
console.log(queue)
// Добавить элемент в начало массива
queue.unshift('unshifted')
console.log(queue)
// Достать последний элемент из массива
console.log(queue.pop())
console.log(queue)
// Достать первый элемент из массива
console.log(queue.shift())
console.log(queue)

// Быстро укоротить массив

const array = [1, 2, 3, 4, 5]
console.log(array)
array.length = 2
console.log(array)
