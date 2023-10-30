const animals = ["ant", "dogs", "cats", "bird", "Bird", "Birds"]; //เรียงตาม Ascill code
animals.sort();
console.log(animals);

const nums = [5, 1, 10, 1000, 2, 3, 50];
nums.sort();
console.log(nums); //[ 1, 10, 1000, 2, 3, 5, 50] เรียงตาม Ascill code 1 มาก่อน 2 ไม่ว่าจะอยู่หลักในก็ตาม

//EX1:เรียงเลขตามปกติ
//sol1
nums.sort((a, b) => {
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  } else {
    return 0;
  }
});
console.log(nums);

//sol2
nums.sort((a, b) => a - b);
console.log(nums);

//Ex:2
const persons = [
  { id: 1, fullname: "Susan Jo" },
  { id: 3, fullname: "John Lee" },
  { id: 2, fullname: "ann Smith" },
];
//return sorted array by fullname (ascending order and ignore case)
//[ { id: 2, fullname: 'ann Smith' },   { id: 3, fullname: 'John Lee' }, { id: 1, fullname: 'Susan Jo' },]
