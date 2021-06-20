import express from 'express'
import logger from 'morgan'
import cors from 'cors'

import indexRouter from './routes/index'
import menuRouter from './components/menu/menu.routes'
import pageRouter from './components/page/page.routes'

const app = express()

// Middlewares
app.use(logger('dev'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// API Routes
app.use('/', indexRouter)
app.use('/menu', menuRouter)
app.use('/page', pageRouter)

export default app
