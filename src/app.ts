import express from 'express'
import logger from 'morgan'
import cors from 'cors'

import indexRouter from './routes/index'
import resourceRouter from './components/resource/resource.routes'

const app = express()

// Middlewares
app.use(logger('dev'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// API Routes
app.use('/', indexRouter)
app.use('/resource', resourceRouter)

export default app
