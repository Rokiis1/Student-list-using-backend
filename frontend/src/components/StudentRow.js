// Libraries
import React from "react";

// Style
import "./style/StudentRow.css";

function StudentRow({ id, student, deleteStudent, editStudent }) {
  const birthday = student.birthday.toString().substr(0, 10);

  return (
    <tr className="StudentRow-container">
      <td>{student.name}</td>
      <td>{student.surname}</td>
      <td>{birthday}</td>
      <td>{student.city}</td>
      <td>{student.program}</td>
      <td>{student.group}</td>
      <td className="StudentRow-btn">
        <button
          type="button"
          onClick={() => {
            editStudent(student);
          }}
        >
          Edit
        </button>
        <button type="button" onClick={() => deleteStudent(id)}>
          Delete
        </button>
      </td>
    </tr>
  );
}

export default StudentRow;
