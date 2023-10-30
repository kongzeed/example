const students = [
  {
    name: "Sophia",
    attendance: [true, true, false, true, true],
    testScores: [88, 92, 85, 78, 90],
  },
  {
    name: "Mason",
    attendance: [true, true, true, true, false],
    testScores: [70, 82, 88, 75, 62],
  },
  {
    name: "Isabella",
    attendance: [true, false, false, true, true],
    testScores: [68, 71, 70, 60, 78],
  },
  {
    name: "Liam",
    attendance: [true, true, true, true, true],
    testScores: [90, 87, 92, 88, 95],
  },
  {
    name: "Olivia",
    attendance: [true, true, true, true, false],
    testScores: [72, 78, 75, 80, 62],
  },
];

function getAttendanceRate(student) {
  for (const loopObj of student) {
    const studentNames = loopObj.attendance.map((total) =>
      total === true ? 1 : 0
    );
    let countAttendance = studentNames.filter((counts) => counts === 1).length;

    attendancePercentage = (countAttendance / studentNames.length) * 100;
    // console.log(attendancePercentage);
    nameStd = loopObj.name;
    ans = `${nameStd} มาเรียน ${attendancePercentage}`
    // return(`${nameStd} มาเรียน ${attendancePercentage}`);
  }
  a
  return ans
}


// getAttendanceRate(students);
console.log(getAttendanceRate(students));
