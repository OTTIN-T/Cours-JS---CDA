const express = require("express");
const app = express();

const giftRouter = require("./routes/gift.route");
const matterRouter = require("./routes/matter.route");

app.use(express.json());

app.use("/gifts", giftRouter);
app.use("/matters", matterRouter);

app.listen(3000, () => {
  console.log("Server running");
});
