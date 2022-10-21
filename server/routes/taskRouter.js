import express from 'express'

import checkAuth from '../utils/checkAuth.js'
import checkRole from '../utils/checkRole.js'

import {
	createTask,
	getTasks,
	getTask,
	updateTask,
	deleteTask
} from '../controllers/taskControler.js'

const router = express.Router()

router
	.route('/')
	.post(checkAuth, checkRole, createTask)
	.get(checkAuth, getTasks)
	.put(checkAuth, checkRole, updateTask)

router.route('/some/:id').post(checkAuth, checkRole, deleteTask).get(getTask)

export default router
