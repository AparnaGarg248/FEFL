import React from "react";

function App(){
  const students = [
    { id: 1, name: "Aman", marks: 85, course: "BCA", attendance: 92 },
    { id: 2, name: "Riya", marks: 45, course: "BCA", attendance: 78 },
    { id: 3, name: "Karan", marks: 72, course: "BBA", attendance: 55 },
    { id: 4, name: "Neha", marks: 30, course: "BCA", attendance: 95 },
    { id: 5, name: "Arjun", marks: 92, course: "BBA", attendance: 40 },
    { id: 6, name: "Sonia", marks: 55, course: "BCA", attendance: 65 }
  ];
  return(
    <>
      <h2>Student Performance Dashboard</h2>
      <table border={1} cellPadding={10}>
        <thead>
          <th>Name</th>
          <th>Course</th>
          <th>Marks</th>
          <th>Attendance</th>
          <th>Final Status</th>
        </thead>
        <tbody>
          {
            students.map(value => {
              return(
                <tr style={{
                  color: 
                    value.marks < 50 ? "red" : 
                    value.marks > 50 && value.attendance <= 60 ? "orange" :
                    value.marks > 80 ? "green" : "black"
                  }}>
                  <td>{value.name}</td>
                  <td>{value.course}</td>
                  <td>{value.marks}</td>
                  <td>{value.attendance}%</td>
                  <td>
                    {value.marks > 50 && value.attendance > 60 ? "Pass" : 
                      value.marks > 50 && value.attendance < 60 ? "Attendance Shortage" : "Fail"}
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>

      <h3>Statistics</h3>
      <p>Total Students: {students.length}</p>
      <p>
        Class Average:{" "}
        {(
          students.reduce((sum, s) => sum + s.marks, 0) / students.length
          ).toFixed(2)}
      </p>

      <h3>Dean's List</h3>
      {
        students.filter((s) => s.marks > 85).length > 0 ?
        (students.filter((s) => s.marks > 85).map((s) => <p>{s.name}</p>)) :
        (<p>No students currently qualify for the Dean's List.</p>)
      }

      <h3>BCA Honors</h3>
      {
        students
        .filter((s) => s.course === "BCA" && s.marks > 50)
        .map((s) => (
          <p>{s.name} - {s.marks}</p>
        ))}
    </>
  )
}

export default App