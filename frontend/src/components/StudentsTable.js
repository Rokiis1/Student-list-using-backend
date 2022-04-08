import React, { useState, useEffect, Fragment } from "react";
import EditableRow from "./EditableRow";
import StudentRow from "./StudentRow";

function StudentsTable() {
  const [students, setStudents] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [editableData, setEditableData] = useState({});

  //  GET METHOD
  const getStudents = async () => {
    await fetch("http://localhost:4000/api/v1/students")
      .then((response) => response.json())
      .then((result) => {
        setStudents(result.data.students);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getStudents();
  }, [students]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  // POST METHOD
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
        getStudents();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Cancel button fuction
  const handleCancelClick = () => {
    setIsEditing();
  };

  //  PUT METHOD
  const handleSaveClick = (e) => {
    e.preventDefault();
    const handleSaveClick = e.target.handleSaveClick.value;
    const name = e.target.name.value;
    fetch("http://localhost:4000/api/v1/students", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
      }),
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(handleSaveClick);
  };
  const studentsRow = students.map((student) => {
    return (
      <StudentRow
        key={student._id}
        id={student._id}
        student={student}
        setIsEditing={setIsEditing}
        setEditableData={setEditableData}
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
      <form>
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
          <tbody>
            <Fragment>
              {isEditing && (
                <EditableRow
                  editableData={editableData}
                  handleCancelClick={handleCancelClick}
                  handleSaveClick={handleSaveClick}
                />
              )}
              {studentsRow}
            </Fragment>
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default StudentsTable;
