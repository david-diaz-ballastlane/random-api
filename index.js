const express = require('express')
const { faker } = require('@faker-js/faker')

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.status(200).send('Hello World!!!')
})

app.get('/rng', (req, res) => {
  const rng = Math.random() * Number.MAX_SAFE_INTEGER
  res.status(200).send({
    rng: String(rng)
  })
})

app.get('/rng/int', (req, res) => {
  const rng = Math.round(Math.random() * Number.MAX_SAFE_INTEGER)
  res.status(200).send({
    rngInt: String(rng)
  })
})

app.get('/name', (req, res) => {
  const name = faker.person.fullName()
  res.status(200).send({ name })
})

app.get('/country', (req, res) => {
  const country = faker.location.country()
  res.status(200).send({ country })
})

app.get('/date', (req, res) => {
  const date = faker.date.anytime()
  res.status(200).send({ date })
})


app.listen(3000, () => console.log('Server running in port 3000'))
