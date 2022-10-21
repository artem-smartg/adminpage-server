import express from 'express'

import checkAuth from '../utils/checkAuth.js'

import { createCertificate } from '../controllers/certificateControler.js'

const router = express.Router()

router.route('/').post(createCertificate)

export default router
