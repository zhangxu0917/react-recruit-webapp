const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const userRouter = require('./user')

app.use(cookieParser());
app.use(bodyParser.json());
app.use('/user', userRouter);

app.listen(9093, () => {
  console.log("Server is running on 9093")
})