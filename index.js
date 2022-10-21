import express from 'express'
import cors from 'cors'
import path from 'path'
import dotenv from 'dotenv'
import morgan from 'morgan'
import colors from 'colors'

import { errorHandler, notFound } from './middleware/errorMiddleware.js'

import userRouter from './routes/userRouter.js'
import categoryRouter from './routes/categoryRouter.js'
import questionRouter from './routes/questionRouter.js'
import taskRouter from './routes/taskRouter.js'
import answerRouter from './routes/answerRouter.js'

dotenv.config()

const app = express()

if (process.env.NODE_ENV === 'development') app.use(morgan('dev'))

app.use(express.json())

const __dirname = path.resolve()

const corsOptions = {
	credentials: true,
	origin: ['http://localhost:8080', 'https://domain.com'],
	methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH', 'OPTIONS']
}

app.use(cors(corsOptions))

app.get('/api/uploads/:data', (req, res) => {
	res
		.set({
			'Access-Control-Allow-Credentials': true,
			'Access-Control-Allow-Origin': 'https://mybook.dniprorada.gov.ua'
		})
		.sendFile(__dirname + '/uploads/' + req.params.data)
})

app.use('/api/uploads', express.static(path.join(__dirname, '/uploads/')))

app.use('/api/user', userRouter)

app.use('/api/category', categoryRouter)

app.use('/api/question', questionRouter)

app.use('/api/task', taskRouter)

app.use('/api/answer', answerRouter)

if (process.env.NODE_ENV === 'production') {
	// Step 1:
	app.use(express.static(path.resolve(__dirname, './client')))
	// Step 2:
	app.get('*', function (request, response) {
		response.sendFile(path.resolve(__dirname, './client', 'index.html'))
	})
}

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 50000

app.listen(
	PORT,
	console.log(
		`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
	)
)
