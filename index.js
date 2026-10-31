const express = require("express");
const dbConfig = require("./db.js");
const dotEnv = require("dotenv");
dotEnv.config();
const cors = require("cors");
const app = express();
dbConfig.connectDB();
const studentRouter = require("./routes/student.route.js");
const userRouter = require("./routes/user.route.js");
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    
  }),
);
app.use("/api/student", studentRouter);
app.use("/api/auth", userRouter);
app.get("/", (req, res) => {
  res.send("Hello world");
});
app.listen(8001, () => {
  console.log("Server is running on port 8001");
});
