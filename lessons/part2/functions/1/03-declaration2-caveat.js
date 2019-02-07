'use strict'

// doSomething()

const doOtherUsingSomething = function () {
  doSomething()
}

const doSomething = function () {
  console.log('I did something!')
}

doOtherUsingSomething()
