import React from "react";

function StudentRow({ name, surname, birthday, program, group, city, _id }) {
  const handleClick = () => {
    fetch(`/api/v1/students/${_id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => console.log(res));
  };

  return (
    <tr>
      <td>{name}</td>
      <td>{surname}</td>
      <td>{birthday}</td>
      <td>{city}</td>
      <td>{program}</td>
      <td>{group}</td>
      <td>
        <button type="button">Edit</button>
        <button type="button" onClick={handleClick}>
          Delete
        </button>
      </td>
    </tr>
  );
}

export default StudentRow;
