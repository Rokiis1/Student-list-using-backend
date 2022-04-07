import React, { useState, useEffect, Fragment } from "react";
import EditableRow from "./EditableRow";
import StudentRow from "./StudentRow";

function StudentsTable() {
  const [students, setStudents] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const getStudents = async () => {
    await fetch("http://localhost:4000/api/v1/students")
      .then((response) => response.json())
      .then((result) => {
        // console.log(result);
        // console.log(result.data);
        // console.log(result.data.students);
        setStudents(result.data.students);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    getStudents();
  }, []);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const surname = e.target.surname.value;
    const city = e.target.city.value;
    const birthday = e.target.birthday.value;
    const program = e.target.program.value;
    const group = e.target.group.value;
    fetch("http://localhost:4000/api/v1/students", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        surname: surname,
        city: city,
        birthday: birthday,
        program: program,
        group: group,
      }),
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const studentsRow = students.map((student) => {
    return (
      <StudentRow
        key={student._id}
        name={student.name}
        surname={student.surname}
        city={student.city}
        birthday={student.birthday}
        program={student.program}
        group={student.group}
      />
    );
  });
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          required="required"
          placeholder="Write a name"
        />
        <input
          type="text"
          name="surname"
          required="required"
          placeholder="Write a surname"
        />
        <input
          type="text"
          name="city"
          required="required"
          placeholder="Write a city"
        />
        <input
          type="date"
          name="birthday"
          required="required"
          placeholder="Write a birthday"
        />
        <select name="program" required="required">
          <option value="choose">Choose</option>
          <option value="php">PHP</option>
          <option value="java">JAVA</option>
          <option value="js">JS</option>
          <option value="py">PY</option>
        </select>
        <input
          type="text"
          name="group"
          required="required"
          placeholder="Write a group"
        />
        <button type="submit">Add</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>Birthday</th>
            <th>City</th>
            <th>Program</th>
            <th>Group</th>
          </tr>
        </thead>
        <tbody>{studentsRow}</tbody>
      </table>
    </div>
  );
}

export default StudentsTable;
