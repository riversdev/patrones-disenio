const express = require('express')
const parser = require('body-parser')
const services = require('./services')
const handlify = require('./handlers')

const app = express()
const port = 3000

app.use(parser.urlencoded({ extended: false }))
app.use(parser.json())

const usersHandler = handlify('users')
app.get('/', usersHandler(services).get)
app.post('/', usersHandler(services).post)
app.put('/:id', usersHandler(services).put)
app.delete('/:id', usersHandler(services).delete)

const postsHandler = handlify('posts')
app.get('/posts', postsHandler(services).get)
app.post('/posts', postsHandler(services).post)
app.put('/posts:id', postsHandler(services).put)
app.delete('/posts:id', postsHandler(services).delete)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))