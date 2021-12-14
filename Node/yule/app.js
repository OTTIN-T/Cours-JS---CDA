const express = require("express");
const app = express();

const yuleRouter = require("./route/yule.route");
const categoryRouter = require("./route/category.route");
const ingredientRouter = require("./route/ingredient.route");

app.use(express.json());
app.use("/yules", yuleRouter);
app.use("/ingredients", ingredientRouter);
app.use("/categories", categoryRouter);

app.listen(3000, () => {
  console.log("Server running");
});
