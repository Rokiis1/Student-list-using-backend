const mongoose = require("mongoose");
const app = require("./app");

mongoose.connect("mongodb://localhost/studentslist");

app.listen(4000, () => {
  console.log("listening for requests on port 4000");
});
