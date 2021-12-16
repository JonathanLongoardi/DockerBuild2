
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000;



app.get('/', (req, res) => {
  res.send('haciendo el sql...')
})

app.listen(process.env.PORT, '0.0.0.0', () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})
