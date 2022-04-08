import React from "react";

function StudentRow({ id, setIsEditing, student, setEditableData }) {
  function editStudent(student) {
    setEditableData(student);
    setIsEditing(true);
  }
  const handleClick = () => {
    console.log(id);
    fetch(`http://localhost:4000/api/v1/students/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => console.log(res));
  };

  return (
    <tr>
      <td>{student.name}</td>
      <td>{student.surname}</td>
      <td>{student.birthday}</td>
      <td>{student.city}</td>
      <td>{student.program}</td>
      <td>{student.group}</td>
      <td>
        <button
          type="button"
          onClick={() => {
            editStudent(student);
          }}
        >
          Edit
        </button>
        <button type="button" onClick={handleClick}>
          Delete
        </button>
      </td>
    </tr>
  );
}

export default StudentRow;
