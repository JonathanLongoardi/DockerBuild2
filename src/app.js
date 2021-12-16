
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000;

var sqlze = require('sequelize');
var mysql =  require('mysql');
var db = new sqlze('id18136124_docker3', 'username', '\Tq27Yu4A]tXy(@5',{
dialect: 'mysql',
port: process.env.PORT || 80
});

app.get('/', (req, res) => {
  res.send('haciendo el sql...')
})

app.listen(process.env.PORT, '0.0.0.0', () => {
  //console.log(`Example app listening at http://localhost:${port}`)
})

db
.authenticate()
.complete(function(err){
if(!!err) {
console.log('Unable to connect to database: ', err);
} else {
console.log('Connection OK!');
}
});
