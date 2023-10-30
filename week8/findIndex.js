const studentScores = [
  { name: "Alice", score: 85 },
  { name: "Bob", score: 92 },
  { name: "DAVID", score: 79 },
  { name: "Charlie", score: 68 },
  { name: "David", score: 55 },
  { name: "Eve", score: 78 },
  { name: "david", score: 85 },
];
//return student who has name equals to david with in casesensitive and score more than 80
//sol1
const findDavid = studentScores
  .filter((students) => students.name.toLowerCase() === "david")
  .find((students) => students.score > 80);
console.log(findDavid);
//sol2
studentScores.find(
  (stu) => stu.name.toLowerCase() === "david" && stu.score > 80
);
//sol3
const result = studentScores.filter(
  (student) => student.name.toLowerCase() === "david" && student.score > 80
);
console.log(result);

//เพิ่มเติม
const foundIndex = studentScores.findIndex(
  (student) => student.name.toLowerCase() === "eve"
);
console.log(foundIndex); //5
