import express from 'express'

import checkAuth from '../utils/checkAuth.js'
import checkRole from '../utils/checkRole.js'

import {
	createQuestion,
	getQuestions,
	getQuestion,
	updateQuestion,
	deleteQuestion
} from '../controllers/questionControler.js'

const router = express.Router()

router
	.route('/')
	.post(checkAuth, checkRole, createQuestion)
	.put(checkAuth, checkRole, updateQuestion)

router.route('/get/:task/:category?').get(checkAuth, getQuestions)

router
	.route('/some/:id')
	.post(checkAuth, checkRole, deleteQuestion)
	.get(getQuestion)

export default router
