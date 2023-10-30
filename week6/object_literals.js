//1. create object with object literals
const st1 = { studentId: 651000101, firstname: 'Somchai', lastname: 'Sookjai' }
console.log(typeof st1)
console.log(st1)
const st2 = {} //empty object {} === const st2 = new Object()
console.log(typeof st2)

console.log(Object.keys(st1)) //array of property key
console.log(Object.values(st1)) //array of property value

const st3 = { firstname: 'Suda', lastname: 'Jaidee', studentId: 651000102 }
console.log(st3)

//composite object : address object is nested in st4 object
const st4 = {
    firstname: 'Pornchai',
    lastname: 'Jaidee',
    studentId: 651000103,
    address: { province: 'Bangkok', country: 'Thailand' },
    //     getFullname: function () {
    //         return `${this.firstname} ${this.lastname}`
    //     }

    //remove :function
    getFullname() {
        return `${this.firstname} ${this.lastname}`
    }
}
console.log(st4.address, country)
console.log(st4['address']['country'])
//get property 1) objectname.propertykey 2) objectname["propertykey"]
console.log(st4.firstname)
console.log(st4['lastname']) //dynamic key
//dynamic property: add a new one, update or delete existing property
st4.email = 'pornchai.jai@Kmutt.ac.th'
st4.firstname = 'Pornsak'
delete st4.email
st4.getAddress = function () {
    return this.address
}
console.log(st4)

console.log(st4.getFullname()) //Pornchai Jaidee
//property value can store function
const st5 = {
    firstname: 'Porntip',
    lastname: 'Dee',
    studentId: 651000105,
    getFullname: function () {
        return `${this.firstname} ${this.lastname}`
    }
}
console.log(st5.getFullname()) //Porntip Dee

