import express from 'express'

import checkAuth from '../utils/checkAuth.js'
import checkRole from '../utils/checkRole.js'

import {
	createCategory,
	getCategories,
	getCategory,
	updateCategory,
	deleteCategory
} from '../controllers/categoryControler.js'

const router = express.Router()

router
	.route('/')
	.post(checkAuth, checkRole, createCategory)
	.get(checkAuth, getCategories)
	.put(checkAuth, checkRole, updateCategory)

router
	.route('/some/:id')
	.post(checkAuth, checkRole, deleteCategory)
	.get(getCategory)

export default router
