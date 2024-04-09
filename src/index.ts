import express from 'express'
import { listUsersController } from './controllers/user-controller'

const app = express()
const port = 3333

app.get('/users', listUsersController)

app.listen(port, () => {
  console.log(`🚀 Server is running on http://localhost:${port} `)
})