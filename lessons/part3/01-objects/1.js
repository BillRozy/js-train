// Создаем объект

const vehicle = {}

// Записываем в него свойства

vehicle.model = 'Lada'
vehicle.serial = 'A239KH'
vehicle.kms = 100000

// Выведем в консоль
// Напишем функцию которая умеет печатать в консоль данные о машине
function logVehicle (vehicle) {
  console.log('Машина \n' +
  'Модель: ' + vehicle.model + '\n' +
  'Номер: ' + vehicle.serial + '\n' +
  'Пробег: ' + vehicle.kms + '\n')
}

// Напечатаем о машине
logVehicle(vehicle)

// Изменим пробег
vehicle.kms = 80000

// Напечатаем о машине
logVehicle(vehicle)

// Удалим пробег

delete vehicle.kms

// Напечатаем о машине
logVehicle(vehicle)

// Проверить есть ли свойство у объекта?
// Вариант 1
if (vehicle.kms) { // почему работает?
  console.log('Свойство kms существует у vehicle')
} else {
  console.log('Свойство kms не существует у vehicle')
}
// Вариант 2
if ('kms' in vehicle) {
  console.log('Свойство kms существует у vehicle')
} else {
  console.log('Свойство kms не существует у vehicle')
}

// Обратиться можно и к несуществующему полю объекта - ошибки не будет он просто undefined
console.log(vehicle.driver)
console.log(vehicle.engine)
console.log(vehicle.model)

// Обращение к свойству через квадратные скобки
for (const prop of ['driver', 'engine', 'model']) {
  console.log(vehicle[prop])
}

vehicle['driver'] = 'Liliya'
vehicle['engine'] = '120lbs'

for (const prop of ['driver', 'engine', 'model']) {
  console.log(vehicle[prop])
}

// Создание сразу со свойствами

let period = {
  start: '8:00',
  end: '17:00'
}

// Присвоить переменную свойству

const shift = {
  id: 1,
  description: 'Утренняя смена',
  period: period
}

console.log(shift)

// Объект из переменной не копируется - указывают на один и тот же объект

period.start = '8:30'

console.log(shift)

period = null

console.log(shift)

// Свойства с пробелами - можно, но не нужно

const passport = {
  'серийный номер': 221445893,
  'дата выдачи': '12/01/2010'
}

console.log(passport)
