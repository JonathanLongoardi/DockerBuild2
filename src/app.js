
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000;


var sys = require('sys');
 
var Client = require('mysql').Client;
var client = new Client();
 
client.user = 'username';
client.password = '\Tq27Yu4A]tXy(@5';
 
client.connect(function(error, results) {
  if(error) {
    console.log('Error: ' + error.message);
    return;
  }
});


app.get('/', (req, res) => {
  res.send('haciendo el sql...')
})

app.listen(process.env.PORT, '0.0.0.0', () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})
