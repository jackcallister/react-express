import express from 'express'
import http from 'http'
import path from 'path'

import applicationController from '../controllers/applicationController'

const app = express()
const server = http.Server(app)
const port = process.env.PORT || 3000

app.set('views', path.join(__dirname, '../views'))
app.set('view engine', 'ejs')
app.use('/lib', express.static(path.join(__dirname, '../lib')))

app.use('/', applicationController)

app.listen(port, () => {
  console.log('listening on *:' + port)
})
