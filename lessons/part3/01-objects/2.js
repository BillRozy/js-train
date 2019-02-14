// Итерация свойств объекта

const example = {
  first: '1',
  second: '2',
  third: '3'
}

for (const key in example) {
  console.log('Свойство = ' + key + ' , Его Значение = ' + example[key])
}

// Сколько всего свойств в объекте?
let counter = 0

for (let unused in example) {
  counter++
}

console.log('Всего свойств: ' + counter)

// Порядок перебора? Не стоит на него полагаться - это не регламентировано (но в большинстве случаев правильный порядок)

var codes = {
  '7': 'Россия',
  '38': 'Украина',
  '1': 'США'
}

for (const code in codes) console.log(code) // 1, 7, 38
