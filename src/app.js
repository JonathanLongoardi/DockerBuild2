const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000;



var mysql = require('mysql2');

var con = mysql.createConnection({
  host: "remotemysql.com",
  user: "QQIfU2UnGp",
  password: "0daqjLMrOS",
  database: "QQIfU2UnGp"
});


con.connect(function(err) {
  if (err) throw err;
  con.query("select * from TABLA1", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});





app.get('/', (req, res) => {
  res.send('haciendo el sql...')
})

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})
