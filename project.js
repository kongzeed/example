const accounts = [
  {
    id: 1,
    name: 'User',
    balance: 10000
  },
  {
    id: 2,
    name: 'Amin',
    balance: 10000
  },
  {
    id: 3,
    name: 'Jim',
    balance: 10000
  }
]
// const user1 = {
//   id: 1,
//   name: 'User',
//   balance: 10000
//   bankName:"abc"
// }

function addAccount(id, name, balance, bankName) {
  // isUnique
  const isUnique = !accounts.some((user) => {
    return user.id === id
  })
  // isNotUnique
  // const isDuplicated = accounts.some((user) => {
  //   return user.id === id
  // })
  if (isUnique) {
    accounts.push({ id, name, balance, bankName })
  } else {
    consoleIt('Id is already existed!')
  }
}

function deposit(id, amount) {
  // callbackFn(ทำอะไรก็ได้ ทำเป็นอย่างนี้เเต่ต้องดู methord ต้องการอะไร) or predicate(check if:return boolean;true/false)
  let selectedIndex = accounts.findIndex((user) => {
    return user.id === id
  })
  accounts[selectedIndex].balance += amount
}

function withdraw(id, amount) {
  let selectedIndex = accounts.findIndex((user) => {
    return (user.id = id)
  })

  let user = accounts[selectedIndex]
  if (user.balance >= amount) {
    user.balance -= amount
  }
}

function totalBalance() {
  let sum = accounts.reduce((a, b) => {
    return a + b.balance
  }, 0)
  return sum
}

function transfer(srcId, desId, amount) {
  const srcUser = getUser(srcId)
  const desUser = getUser(desId)
  if () {
  }
}
function addMoney(id , amount) {
  let selectedIndex = accounts.findIndex((user) => {
    return user.id === id
  })
  accounts[selectedIndex].balance += amount
}
function getUser(id) {
  let selectedIndex = accounts.findIndex((user) => {
    return user.id == id
  })
  return accounts[selectedIndex]
}

console.log(totalBalance())
// console.log(accounts)
