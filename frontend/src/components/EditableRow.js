import React from "react";

const EditableRow = ({ editableData, handleSavelClick, handleCancelClick }) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          name="name"
          required="required"
          placeholder="Write a name"
          value={editableData.name}
          onChange={(e) => handleSavelClick(e.target.value)}
          readOnly
        ></input>
      </td>
      <td>
        <input
          type="text"
          name="surname"
          required="required"
          placeholder="Write a surname"
          value={editableData.surname}
          onChange={(e) => handleSavelClick(e.target.value)}
        ></input>
      </td>
      <td>
        <input
          type="text"
          name="city"
          required="required"
          placeholder="Write a city"
          value={editableData.city}
          onChange={(e) => handleSavelClick(e.target.value)}
        ></input>
      </td>
      <td>
        <input
          type="date"
          name="birthday"
          required="required"
          placeholder="Write a birthday"
          value={editableData.birthday}
          onChange={(e) => handleSavelClick(e.target.value)}
        ></input>
        <select
          name="program"
          required="required"
          value={editableData.program}
          onChange={(e) => handleSavelClick(e.target.value)}
        >
          <option value="choose">Choose</option>
          <option value="php">PHP</option>
          <option value="java">JAVA</option>
          <option value="js">JS</option>
        </select>
        <input
          type="text"
          name="group"
          required="required"
          placeholder="Write a group"
          value={editableData.group}
          onChange={(e) => handleSavelClick(e.target.value)}
        />
      </td>
      <td>
        <button type="submit" onClick={handleSavelClick}>
          Save
        </button>
        <button type="submit" onClick={handleCancelClick}>
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default EditableRow;
