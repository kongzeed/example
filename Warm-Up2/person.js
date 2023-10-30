class Person {
  constructor(firstName, lastName, dateOfBirth) {
    this.firstName = firstName
    this.lastName = lastName
    this.dateOfBirth = dateOfBirth
  }
  getFullName() {
    return `${this.lastName}, ${this.firstName}`
  }
  getAge() {
    const currentDateMilli = Date.now()
    const birthDateMilli = this.dateOfBirth.getTime()
    const diffMilli = currentDateMilli - birthDateMilli
    console.log(currentDateMilli, birthDateMilli, diffMilli)
    const diffDate = new Date(diffMilli)
    return diffDate.getFullYear() - 1970
  }
  isEqual(anotherPerson) {
    return (
      this.firstName.toLowerCase() === anotherPerson.firstName.toLowerCase() &&
      this.lastName.toLowerCase() === anotherPerson.lastName.toLowerCase()
    )
  }
  toString() {
    return `${this.getFullName} + ${this.getAge}`
  }
}
const p1 = new Person('Umaporn', 'Sup', new Date(1980, 7, 30))
console.log(p1.getAge())
const p2 = new Person('somchai', 'Sup', new Date(1985, 1, 10))
console.log(p1.getFullName())
console.log(p2.getFullName())
console.log(p2.isEqual(p1))
console.log(p1.isEqual(p1))
console.log(p1.toString())
