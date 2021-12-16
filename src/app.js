
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000;


var mysql = require('mysql');

var con = mysql.createConnection({
  host: "files.000webhost.com",
  user: "docker3",
  password: "\Tq27Yu4A]tXy(@5"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});


app.get('/', (req, res) => {
  res.send('haciendo el sql...')
})

app.listen(process.env.PORT, '0.0.0.0', () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})
