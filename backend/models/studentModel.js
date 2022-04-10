const mongoose = require("mongoose");

// DB schema
const studentsSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  surname: {
    type: String,
  },
  birthday: {
    type: Date,
  },
  program: {
    type: String,
  },
  city: {
    type: String,
  },
  group: {
    type: String,
  },
  createdAt: {
    type: Date,
    immutable: true,
    default: () => Date.now(),
  },
  updateAt: {
    type: Date,
    immutable: true,
    default: () => Date.now(),
  },
});

// Modelis DB lentelės pavadinimas
const Students = new mongoose.model("Students", studentsSchema);

// Duomenų siuntimas į DB
// run();
// async function run() {
//   try {
//     const testStudents = new Students({
//       name: "Xi hu lo",
//       surname: "Ademolo",
//       birthdate: "2001-11-24",
//       program: "JavaScript",
//       city: "New York",
//       group: "JS-2",
//     });
//     await testStudents.save();
//   } catch (e) {
//     console.log(e.message);
//   }
// }

module.exports = Students;
