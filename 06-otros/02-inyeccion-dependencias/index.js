const express = require('express')
const axios = require('axios')
const app = express()
const port = 3000

const { get } = require('./handlers')

app.get('/', get(axios))

app.listen(port, () => console.log(`Example app listening on port ${port} !`))