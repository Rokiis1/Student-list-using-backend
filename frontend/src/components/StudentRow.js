// Libraries
import React from "react";

// Style
import "./style/StudentRow.css";
// Icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function StudentRow({ id, student, deleteStudent, editStudent }) {
  return (
    <tr>
      <td>{student.name}</td>
      <td>{student.surname}</td>
      <td>{student.birthday}</td>
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
          <FontAwesomeIcon icon="fa-light fa-trash" />
        </button>
      </td>
    </tr>
  );
}

export default StudentRow;
