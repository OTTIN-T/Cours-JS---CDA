const express = require("express");
const app = express();
const cors = require("cors");
const port = 3000;

const userRouter = require("./routes/user.router");
const giftRouter = require("./routes/gift.router");
const auth = require("./middleware/auth");

app.use(express.json());
app.use(cors());

app.use("/users", userRouter);
app.use("/gifts", auth(), giftRouter);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

module.exports = app;
