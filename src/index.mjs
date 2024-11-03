import express, { response } from 'express'

const app = express()

const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.status(201).send({ msg: "Hello" })
})

app.get('/api/users', (reqeust, response) => {
  response.send([
    { id: 1, username: 'Pedro', displayName: 'Pedro' },
    { id: 2, username: 'Brilhante', displayName: 'Brilhante' },
    { id: 3, username: 'Germano', displayName: 'Germano' }
  ])
})

app.get('/api/users/:id', (request, response) => {
  console.log(request.params)
})

app.listen(PORT, () => {
  console.log(`Running on Port ${PORT}`)
})


