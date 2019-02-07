'use strict'

doSomething()

function doOtherUsingSomething () {
  doSomething()
}

function doSomething () {
  console.log('I did something!')
}

doOtherUsingSomething()
