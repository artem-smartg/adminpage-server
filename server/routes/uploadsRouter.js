import express from 'express'

import multer from 'multer'
import { v1 as uuidv4 } from 'uuid'
const router = express.Router()
import checkAuth from '../utils/checkAuth.js'
import checkRole from '../utils/checkRole.js'

const storage = multer.diskStorage({
	destination: (_, __, cb) => {
		cb(null, 'uploads')
	},
	filename: async (_, file, cb) => {
		const fileName = uuidv4().toString() + file.originalname
		cb(null, fileName)
	}
})

const upload = multer({ storage })

router
	.route('/', checkAuth, checkRole)
	.post(upload.single('image'), (req, res) => {
		res.json({
			url: `/uploads/${req.file.filename}`
		})
	})
	.delete((req, res) => {
		res.status(200).json('Success')
	})

export default router
