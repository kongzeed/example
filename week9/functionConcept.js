function op1(fn) {
    return fn()
  }
  
  function op2(fn) {
    return fn
  }
  
  function greeting() {
    return 'Hello'
  }
  
  function goodbye() {
    return 'Bye Bye'
  }
  
  const a = greeting
  const b = greeting()
  
  console.log(a) //[Function: greeting]
  console.log(b) //'Hello'
  console.log(a()) //string, 'Hello'
  // console.log(b()) //error:b is not a function
  const result1 = op1(greeting)
  
  console.log(typeof result1) //String
  console.log(result1) //'Hello'
  const result2 = op1(goodbye)
  
  console.log(typeof result2) //String
  console.log(result2) //'Bye Bye'
  const result3 = op2(greeting)
  
  console.log(typeof result3) //function
  console.log(result3) //greeting function
  const result4 = op2(goodbye)
  
  console.log(typeof result4) //function
  console.log(result4) //goodbye function























// const add = (num1, num2) => num1 + num2
// const subtract = (num1, num2) => num1 - num2
// function doSomething1(num1, num2, op) {
//   return op(num1, num2)
// }
// function doSomething2(op) {
//   return op
// }

// const result1 = doSomething1(10, 5, add) //15
// console.log('result1', result1)
// const result2 = doSomething2(add) //add function
// console.log(typeof result2) //function
// console.log('result2', result2)
// const result3 = doSomething2(subtract) //subtract function
// console.log(typeof result3) //function
// console.log('result3', result3)
// const result4 = doSomething2(1) //1
// console.log(typeof result4) //Number
// console.log('result4', result4)
// const result5 = doSomething2('add') //'add'
// console.log(typeof result5) //String
// console.log('result5', result5)

// =====================================================================================

// let a = 1
// let b = 10

// function doSomething(params) {
//     let b = 555
//     let result = a + b
//     function doIt() {
//         let c = 100
//         result += c
//         console.log(result);
//     }
//     console.log(c);
// }

// doSomething()
// a = 100
// console.log(a);
// console.log(a)

// let a = 1

// function s() {
//     console.log(a);
// }

