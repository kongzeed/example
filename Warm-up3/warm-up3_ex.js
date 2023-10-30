// Example usage:
const studentScores = [
  { name: 'Alice', score: 85 },
  { name: 'Bob', score: 92 },
  { name: 'Charlie', score: 68 },
  { name: 'David', score: 55 },
  { name: 'Eve', score: 78 }
]

function getPassingNames(students) {
  const filterStudents = students.filter((student) => students.score >= 70)
  const studentNames = filterStudents.map((filterStudent) =>
    filterStudents.name.toUpperCase()
  )
  return students
}
const passingNames = getPassingNames(studentScores)
console.log(passingNames)
