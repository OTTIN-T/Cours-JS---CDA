const express = require('express');
const app = express();

const yuleRouter = require('./route/yule.route');

app.use(express.json());
app.use('/yules', yuleRouter);

app.listen(3000, () => {
  console.log('Server running');
})
