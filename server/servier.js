const express = require('express');
const app = express();

// FIXME:连接mongodb
const DB_URL = 'mongodb://127.0.0.1:27017';
mongoose.connect(DB_URL)
mongoose.connect.on('connected', () => {
  
})


app.get('/', (req, res) => {
  res.send("<h1>Hello World<h1>")
})

app.get('/data', (req, res) => {
  res.json({
    name: 'Frank',
    age: 30
  })
})

app.listen(9093, () => {
  console.log("Server is running on 9093")
})