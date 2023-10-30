const persons = [
  { id: 1, fullname: "Susan Jo" },
  { id: 3, fullname: "John Lee" },
  { id: 2, fullname: "ann Smith" },
];
//return sorted array by fullname (ascending order and ignore case)
//[ { id: 2, fullname: 'ann Smith' },   { id: 3, fullname: 'John Lee' }, { id: 1, fullname: 'Susan Jo' },]

//sol1
persons.sort((a, b) => {
  return a.fullname.localeCompare(b.fullname); //localeCompare is same like toCompare in JAVA
});

console.log(persons);

//sol2
const sortignorecase = persons.sort((a, b) => {
  if (a.fullname.toUpperCase() < b.fullname.toUpperCase()) {
    return -1;
  } else if (a.fullname.toUpperCase() > b.fullname.toUpperCase()) {
    return 1;
  } else return 0;
});

console.log(sortignorecase);
