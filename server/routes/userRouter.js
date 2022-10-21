import express from 'express'

import checkAuth from '../utils/checkAuth.js'

import { RegisterValidation } from '../validations/RegisterValidator.js'

import { LoginValidation } from '../validations/LoginValidator.js'

import { createUser, getUserInfo, login } from '../controllers/userControler.js'

const router = express.Router()

router.route('/').post(RegisterValidation, createUser)

router.route('/me').post(checkAuth, getUserInfo)

router.route('/login').post(LoginValidation, login)

export default router
