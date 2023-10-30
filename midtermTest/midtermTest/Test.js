// console.log('kuy9')
// console.log(1 + '2')
// console.log(1 + false)
// console.log(Number('null'))
// console.log(undefined + null)
// console.log(5)

// const person = {
//   name: 'John',
//   age: 30
// }
// const person2 = {
//   name: 'John',
//   kuy: 30
// }

// console.log(person)
// const j = person.valueOf(person2)
// console.log(j)
// console.log(person2)

// function Person(name, age) {
//   this.name = name
//   this.age = age
//   console.log(this)
// }
// const john = new Person('John', 30)
// const jam = new Person('John', 99)
// console.log('V')
// console.log('john')
// console.log('jam')

// function Person(name, age) {
//   this.name = name
//   this.age = age
// }
// const john = new Person('John', 30)
// console.log(john)

// const Human = {
//   greet: function () {
//     console.log('Hello!')
//   }
// }
// const john2 = Object.create(Human)
// // john2.name = 'mos'
// // console.log(john2)
// // john2.greet()
// class Person3 {
//   name = 'k'
//   age
//   constructor(name, age) {
//     this.name = name
//     this.age = age
//   }
// }

// const lang = new Person3('lang', 9)
// console.log(lang)

// class Student {
//   constructor(name, attendance, testScore) {
//     this.name = name
//     this.attendance = attendance
//     this.testScore = testScore
//   }
// }
// const s1 = new Student()
// console.log(s1)

// function createPerson(name, age) {
//   return {
//     name,
//     age: age
//   }
// }
// const john = createPerson('John', 30)

// console.log(john.brith)
// john.brith = null
// console.log(john)

// const student = {
//   name: 'ninsa',
//   1990: 'register',
//   testScore: [90, 90, 90, 90]
// }
// // console.log(student.name)
// console.log(student[2000 - 10])
// console.log(student[true ? 'name' : 'testScore'])
// const obj1 = {
//   age: null,
//   name: null,
//   foo() {
//     return 'bar'
//   }
// }
// const obj2 = {
//   age: null,
//   name: null,
//   foo() {
//     return 'bar'
//   }
// }

// const onlykey1 = Object.keys(obj1)
// const onlykey2 = Object.keys(obj2)
// console.log(onlykey1.length === onlykey2.length)

// function shallowEquality(object1, object2) {
//   const keys1 = Object.keys(object1)
//   const keys2 = Object.keys(object2)
//   console.log(keys1)
//   console.log(keys2)
//   if (keys1.length !== keys2.length) {
//     return false
//   }

//   for (let key of keys1) {
//     if (object1[key] !== object2[key]) {
//       return false
//     }
//   }

//   return true
// }

// const city1 = { name: 'Tokyo', address: 'th' }
// const city2 = { name: 'Tokyo', address: 'th' }
// //shallowEquality(city1, city2) // true
// const student = {
//   name: 'ninsa',
//   1990: 'register',
//   testScore: [90, 90, 90, 90]
// }
// const person = {
//   name: 'Blue'
// }
// console.log(JSON.stringify(person)) // { "name": "Blue" }
// console.log(JSON.stringify(student))
// const cityJson = JSON.stringify(city1)
// const city2Json = JSON.stringify(city2)
// console.log(cityJson)
// console.log(city2Json)
// console.log(cityJson === city2Json)

// const studnet = {
//   name: 'ninsa',
//   1990: 'register',
//   testScore: [90, 90, 90, 90]
// }

// const studentCopy = { ...studnet, age: 90 }
// console.log(studnet === studentCopy)
// const { name, testScore, ...kuy } = studnet
// const { name: name2, testScore: testScore2 } = studentCopy
// // console.log(student.name)
// studnet.name = 'nong'
// console.log(studnet.name)
// console.log(name)

// console.log(studentCopy)
// // console.log('original V')
// // console.log(studnet)
// // console.log(studnet === studentCopy)

// const school = {
//   student: {
//     name: { firstname: 'wichira', last: 'matrakampa' },
//     testScore: [90, 90, 90, 90]
//   }
// }
// const {
//   student: {
//     name: { firstname }
//   }
// } = school

// console.log(firstname)
// console.log(Student);

// function createPerson(name, age) {
//   return {
//     name,
//     age: age,
//   };
// }
// const john = createPerson('John', 30);

// console.log(john.brith);
// john.brith = null;
// console.log(john);

// const studnet = {
//   name: 'fluke',
//   1990: 'register',
//   testScore: [90, 90, 90, 90, 90],
// };
// console.log(studnet['name']);

// const obj = {
//   age: null,
//   name: null,
//   foo() {
//     return 'bar';
//   },
// };
// const obj2 = {
//   age: null,
//   name: null,
//   foo() {
//     return 'bar';
//   },
// };

// const onlykey = Object.keys(obj);
// const onlykey2 = Object.keys(obj2);

// console.log(onlykey.length === onlykey2.length);

// function shallowEquality(object1, object2) {
//   const keys1 = Object.keys(object1);
//   const keys2 = Object.keys(object2);
//   console.log(keys1, keys2);

//   if (keys1.length !== keys2.length) {
//     return false;
//   }

//   for (let key of keys1) {
//     if (object1[key] !== object2[key]) {
//       return false;
//     }
//   }

//   return true;
// }

// const city1 = { address: 'th', name: 'Tokyo' };
// const city2 = { name: 'Tokyo', address: 'th' };
// // shallowEquality(city1, city2);

// const person = {
//   name: 'Blue',
// };
// const cityJson = JSON.stringify(city1);
// const city2Json = JSON.stringify(city2);

// console.log(cityJson);
// console.log(city2Json);

// console.log(cityJson === city2Json);

// const studnet = {
//   name: 'fluke',
//   1990: 'register',
//   testScore: [90, 90, 90, 90, 90],
// };

// const studentCopy = { ...studnet, age: 90 };
// console.log(studentCopy);
// console.log(studnet === studentCopy); //false

// const { name, ...kuy } = studnet;
// console.log(kuy);
// const { name: name2, testScore: testScore2 } = studentCopy;

// studnet.name = 'nong';

// console.log(studnet.name);
// console.log(name);

// console.log(studentCopy);
// console.log('original V');
// console.log(studnet);
// console.log(studnet === studentCopy);

// const school = {
//   student: {
//     name: { firstname: 'wichira', lastname: 'matrakampa' },
//     testScore: [90, 90, 90, 90, 90],
//   },
// };

// const {
//   student: {
//     name: { firstname },
//   },
// } = school;

// console.log

let numbers = [1, 2, 3, 4, 5]

let squaredNumbers = numbers.map(function (num) {
  num * num
})
console.log(squaredNumbers) // Output: [1, 4, 9, 16, 25]

const sum = (a, b) => {
  return a + b
}

function useFunc(a, b, fn) {
  return fn(a, b)
}
console.log(useFunc(5, 7, sum))
