// Фундаментальным отличием объектов от примитивов, является их хранение и копирование «по ссылке».

const person1 = {
  name: 'Liliya',
  surname: 'Denisova',
  age: 24
}

const person2 = {
  name: 'Oleg',
  surname: 'Budylin',
  age: 24
}

const classroom = {
  teacher: person2,
  pupil: person1
}

console.log(classroom)

classroom.teacher.comment = 'Лучший чел в мире!'

console.log(classroom.teacher)
console.log(person2)

// Как аргумент в функции

function killTeacherInClassroom (classroom) {
  delete classroom.teacher
}

console.log('Класс до убийства учителя')
console.log(classroom)
console.log('Класс после убийства учителя')
killTeacherInClassroom(classroom)
console.log(classroom)
