// Libraries
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

// Components
import StudentRow from "./StudentRow";
// Style
import "./style/StudentsTable.css";

function StudentsTable() {
  const [students, setStudents] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [currentStudent, setCurrentStudent] = useState({});
  let [editingId, setEditingID] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValue: {
      name: "",
      surname: "",
      city: "",
      birthday: "",
      program: "",
      group: "",
    },
  });

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
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const addStudent = (data) => {
    if (editingId) {
      // PUT METHOD fetch
      fetch("http://localhost:4000/api/v1/students/" + editingId, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((res) => {
          console.log(res);
          getStudents();
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      // POST METHOD
      fetch("http://localhost:4000/api/v1/students", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((res) => {
          console.log(res);
          getStudents();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  //  PUT METHOD item
  const editStudent = (data) => {
    setEditingID(data._id);
    setCurrentStudent(data);
  };

  // DELETE METHOD
  const deleteStudent = (id) => {
    fetch(`http://localhost:4000/api/v1/students/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      console.log(res);
      getStudents();
    });
  };

  new Date("2019-10-17T02:00:00.000Z").toLocaleDateString();

  const studentsRow = students.map((student) => {
    return (
      <StudentRow
        key={student._id}
        id={student._id}
        student={student}
        deleteStudent={deleteStudent}
        editStudent={editStudent}
      />
    );
  });

  return (
    <div className="Main-container">
      <form className="Main-form" onSubmit={handleSubmit(addStudent)}>
        <label>Name</label>
        <input
          placeholder="Write a name"
          defaultValue={currentStudent.name}
          {...register("name", {
            required: "This is requires",
            minLength: {
              value: 3,
              message: "Minimum lenght is 3",
            },
            maxLength: {
              value: 15,
              message: "Max lenght is 15",
            },
            pattern: {
              value: /^[A-Za-z]+$/i,
              message: "You write with number or wrong symbol",
            },
          })}
        />
        <p className="error">{errors.name?.message}</p>
        <label>Surname</label>
        <input
          placeholder="Write a surname"
          defaultValue={currentStudent.surname}
          {...register("surname", {
            required: "This is requires",
            minLength: {
              value: 3,
              message: "Minimum lenght is 3",
            },
            maxLength: {
              value: 20,
              message: "Max lenght is 20",
            },
            pattern: {
              value: /^[A-Za-z]+$/i,
              message: "You write with number or wrong symbol",
            },
          })}
        />
        <p className="error">{errors.surname?.message}</p>

        <label>City</label>
        <input
          placeholder="Write a city"
          defaultValue={currentStudent.city}
          {...register("city", {
            required: "This is requires",
            minLength: {
              value: 3,
              message: "Minimum lenght is 3",
            },
            maxLength: {
              value: 20,
              message: "Max lenght is 20",
            },
            pattern: {
              value: /^[A-Za-z]+$/i,
              message: "You write with number or wrong symbol",
            },
          })}
        />
        <p className="error">{errors.city?.message}</p>

        <label>Birthday</label>
        <input
          type="date"
          {...register("birthday", {
            required: "This is requires",
            value: "",
          })}
        />
        <p className="error">{errors.birthday?.message}</p>
        <label>Program</label>
        <select {...register("program")}>
          <option value="Select">Select</option>
          <option value="JavaScript">JavaScript</option>
          <option value="Java">Java</option>
          <option value="PHP">PHP</option>
          <option value="Python">Python</option>
        </select>

        <label>Group</label>
        <select
          {...register("group", {
            required: true,
          })}
        >
          <option value="Select">Select</option>
          <option value="JS-22">JS-22</option>
          <option value="JAVA-22">JAVA-22</option>
          <option value="PHP-22">PHP-22</option>
          <option value="PY-22">PY-22</option>
        </select>

        <button className="Main-form-btn" type="submit">
          Added
        </button>
      </form>

      <table className="Main-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>Birthday</th>
            <th>City</th>
            <th>Program</th>
            <th>Group</th>
            <th>Option</th>
          </tr>
        </thead>
        <tbody>{studentsRow}</tbody>
      </table>
    </div>
  );
}

export default StudentsTable;
