import express from "express";
import userRouter from "./routes/user.route.js";
const app = express();
// const user_controller = require("../controllers/user.controller");

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

app.use(express.json());

app.use("/users", userRouter);

app.listen(3000, () => {
  console.log("listening on port 3000!");
});
