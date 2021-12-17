const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000;



var mysql = require('mysql');

var con = mysql.createConnection({
  host: "files.000webhost.com",
  user: "docker3",
  password: "%R^mdLzvl!WRH@Wf%Hwf",
  database: "id18136124_docker3"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM Tabla1", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});




app.get('/', (req, res) => {
  res.send('haciendo el sql...')
})

app.listen(process.env.PORT, '0.0.0.0', () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})
