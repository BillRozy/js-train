// let value = 0

// function f () {
//   if (1) {
//     value = 1
//   } else {
//     var value = 3
//   }

//   console.log(value)
// }

// f()

function cached (func) {
  const cache = new Map()
  return function () {
    const args = Array.from(arguments)
    if (!cache.has(args)) {
      cache.set(args, func.apply(this, arguments))
    }
    return cache.get(args)
  }
}

function strangeSum (val) {
  strangeSum.lastResult = null
  return function (val2) {
    strangeSum.lastResult = val + val2
    return strangeSum.lastResult
  }
}

console.log(strangeSum(1)(2))
console.log(strangeSum.lastResult)
console.log(strangeSum(2)(5))
console.log(strangeSum.lastResult)

function sum (first, second) {
  return first + second
}

const cachedSum = cached(sum)
console.log(cachedSum(1, 2))
console.log(cachedSum(2, 5))
