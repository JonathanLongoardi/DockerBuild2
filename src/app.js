const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000;

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "remotemysql.com",
  user: "OpQPVaOdqY",
  password: "3i4tc5Xhnc",
  database: "OpQPVaOdqY"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("select * from Tabla1", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    app.get('/', (req, res) => {
      res.send(result)
    })
  });
});



app.listen(PORT, '0.0.0.0', () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})
