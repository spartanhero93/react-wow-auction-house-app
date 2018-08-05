const express = require('express')
const app = express()
const helmet = require('helmet')

const getData = require('./routes/api/index')

app.use(helmet())

app.use('/api', getData)

app.listen(9000, () => console.log('Server is running'))
