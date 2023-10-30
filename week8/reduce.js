const fruits = ["apple", "mango", "orange", "pineapple"];
//concat with the first character of alll fruits
//'amop'
const result = fruits.reduce(
  (firstChars, fruit) => firstChars.concat(fruit[0]),
  ""
);
console.log(result);
const str = "apple"; //array of characters
console.log(str.charAt(0));
console.log(str[0]);

const nums = [1, 2, 3, 4, 5]; //1*2*3*4*5
const mulResult = nums.reduce((mul, num) => mul * num);
console.log(mulResult);

const sellProduct = [
  { id: 1, price: 100, sell: 5 },
  { id: 2, price: 50, sell: 2 },
  { id: 3, price: 25, sell: 10 },
];
//ereturn selling's total prices
//sol1
const sumPrice = sellProduct.reduce(
  (now, next) => now + next.price * next.quantity,
  0
);
console.log(sumPrice);
//sol2
const ans4 = sellProducts.reduce(
  (total, { price, sell }) => total + price * sell,
  0
);
console.log(ans4);
