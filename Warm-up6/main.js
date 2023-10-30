const students = [
  {
    name: 'Sophia',
    attendance: [true, true, false, true, true],
    testScores: [88, 92, 85, 78, 90]
  },
  {
    name: 'Mason',
    attendance: [true, true, true, true, false],
    testScores: [70, 82, 88, 75, 62]
  },
  {
    name: 'Isabella',
    attendance: [true, false, false, true, true],
    testScores: [68, 71, 70, 60, 78]
  },
  {
    name: 'Liam',
    attendance: [true, true, true, true, true],
    testScores: [90, 87, 92, 88, 95]
  },
  {
    name: 'Olivia',
    attendance: [true, true, true, true, false],
    testScores: [72, 78, 75, 80, 62]
  }
]

function getAttendanceRate(student) {
  const attendanceRate = student.filter((student) => student.attendance == true)
  return (attendanceRate.length / students.length) * 100
}

function getAvgScore(student) {
  return student.reduce((score, current) => (score + current) / 5, 0)
}

function underPerformStudents(students) {
  return students
    .filter(
      (Element1) =>
        getAttendanceRate(Element1.attendance) < 80 &&
        getAvgScore(Element1.testScores) < 70
    )
    .map((Element2) => {
      return {
        name: Element2.name,
        attendance: getAttendanceRate(Element2.attendance),
        testScores: getAvgScore(Element2.testScores)
      }
    })
}
console.log(underPerformStudents(students))
