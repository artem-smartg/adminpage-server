import { validationResult } from 'express-validator'

import { regNewUser, getInfo, loginUser } from '../models/userModel.js'
import jwt from 'jsonwebtoken'

export const createUser = (req, res) => {
	const errors = validationResult(req)
	if (!errors.isEmpty()) {
		return res.status(400).json(errors.array())
	}

	try {
		const data = req.body
		regNewUser(data, (err, results) => {
			if (err) {
				res.status(400).json({
					message: err
				})
			} else {
				res.json(results)
			}
		})
	} catch (err) {
		res.status(500).json({
			message: 'Помилка реєстрації'
		})
	}
}

export const getUserInfo = (req, res) => {
	const data = req.body

	try {
		const decoded = jwt.verify(data.token, 'Y5u2g2aG5H2uVFe9pHy9')

		getInfo(decoded, (err, results) => {
			if (err) {
				res.send(401).json(err)
			} else {
				if (results === 'Користувача не знайдено') {
					return res.status(404).json({
						message: results
					})
				} else {
					res.json(results)
				}
			}
		})
	} catch (err) {
		return res.status(401).json({
			message: 'Не валідний токен'
		})
	}
}

export const login = async (req, res) => {
	const errors = validationResult(req)
	if (!errors.isEmpty()) {
		return res.status(400).json(errors.array())
	}

	try {
		const data = req.body
		await loginUser(data, (err, results) => {
			if (err === 'Невірний логін або пароль') {
				res.status(401).json('Помилка авторизації')
			} else {
				res.json(results)
			}
		})
	} catch (err) {
		res.status(401).json('Помилка авторизації')
	}
}
