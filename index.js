const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.status(200).send('Hello World!!!')
})

app.get('/rng', (req, res) => {
  const rng = Math.random() * Number.MAX_SAFE_INTEGER
  res.status(200).send(String(rng))
})

app.listen(3000, () => console.log('Server running in port 3000'))
