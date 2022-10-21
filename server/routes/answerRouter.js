import express from 'express'

import checkAuth from '../utils/checkAuth.js'
import checkRole from '../utils/checkRole.js'

import {
	createAnswer,
	getAnswers,
	getAnswer,
	updateAnswer,
	deleteAnswer
} from '../controllers/answerControler.js'

const router = express.Router()

router
	.route('/')
	.post(checkAuth, checkRole, createAnswer)
	.get(checkAuth, getAnswers)
	.put(checkAuth, checkRole, updateAnswer)

router
	.route('/some/:id')
	.post(checkAuth, checkRole, deleteAnswer)
	.get(getAnswer)

export default router
