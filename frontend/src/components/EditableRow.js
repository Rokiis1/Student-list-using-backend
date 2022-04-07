import React from "react";

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          name="name"
          required="required"
          placeholder="Write a name"
          value={editFormData.name}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          name="surname"
          required="required"
          placeholder="Write a surname"
          value={editFormData.surname}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          name="city"
          required="required"
          placeholder="Write a city"
          value={editFormData.city}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="date"
          name="birthday"
          required="required"
          placeholder="Write a birthday"
          value={editFormData.birthday}
          onChange={handleEditFormChange}
        ></input>
        <select
          name="program"
          required="required"
          value={editFormData.program}
          onChange={handleEditFormChange}
        >
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
          value={editFormData.group}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <button type="submit">Save</button>
        <button type="button" onClick={handleCancelClick}>
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default EditableRow;
