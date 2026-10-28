const express = require("express");
const dbConfig = require("./db.js");
const dotEnv = require("dotenv");
dotEnv.config();
const app = express();
dbConfig.connectDB();
const studentRouter = require("./routes/student.route.js");
app.use(express.json());
app.use("/api/student", studentRouter);
app.get("/", (req, res) => {
  res.send("Hello world");
});
app.listen(8001, () => {
  console.log("Server is running on port 8001");
});


