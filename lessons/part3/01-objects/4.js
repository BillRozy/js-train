// Если свойство объекта - функция, такое свойство называется метод

const welcomer = {
  phraze: 'Приветствую тебя, дорогой/дорогая ',
  welcome: function (whom) {
    console.log(welcomer.phraze + whom)
  }
}

welcomer.welcome('Liliya')
