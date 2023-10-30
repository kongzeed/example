const obj1 = { id: 1, name: 'Somchai' }
const obj2 = { ...obj1 } //spread operator

console.log(obj1)
console.log(obj2)

//! 
const obj3 = { id: 2, name: 'Somchai' }
const obj4 = { ...obj3, ...obj1 }
console.log(obj4)