import React, { useState, useEffect } from "react";
const url = "http://localhost:4000/api/v1/students";
function StudentsList() {
  const [students, setStudents] = useState([]);
  const getStudents = () => {
    fetch(url)
      .then((response) => response.json())
      .then((result) => setStudents(result))
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    getStudents();
  }, []);
  return <div>{JSON.stringify(students)}</div>;
}
export default StudentsList;
