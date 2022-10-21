import db from '../config/config.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

export const regNewUser = async (data, result) => {
	const password = data.password ? data.password : null
	const salt = await bcrypt.genSalt(12)

	const newData = {
		firstName: data.firstName,
		surName: data.surName,
		login: data.login ? data.login : null,
		phone: data.phone,
		email: data.email,
		gender: data.gender,
		passwordHash: password ? await bcrypt.hash(password, salt) : null,
		role: data.role ? data.role : 'User'
	}

	try {
		db.query('INSERT INTO users SET ?', [newData], (err, results) => {
			if (err) {
				if (err.sqlMessage.indexOf('login') !== -1) {
					return result('Користувач з таким логіном вже існує', null)
				} else if (err.sqlMessage.indexOf('email') !== -1) {
					return result('Користувач з такою поштою вже існує', null)
				} else if (err.sqlMessage.indexOf('phone') !== -1) {
					return result('Користувач з таким номером телефону вже існує', null)
				}
			} else {
				try {
					getInfo({ id: results.insertId }, async (err, results) => {
						const token = jwt.sign(
							{
								id: results.id,
								role: results.role
							},
							'Y5u2g2aG5H2uVFe9pHy9'
						)
						result(null, { token: token, data: results })
					})
				} catch (err) {
					result(err, null)
				}
			}
		})
	} catch (err) {
		console.log(err)
	}
}

export const getInfo = async (data, result) => {
	try {
		db.query('SELECT * FROM users WHERE id = ?', data.id, (err, results) => {
			if (err) {
				return result(err, null)
			} else {
				if (results.length === 0) {
					return result(null, 'Користувача не знайдено')
				}
				let { passwordHash, ...user } = results.pop()
				return result(null, user)
			}
		})
	} catch (err) {
		console.log(err)
	}
}

export const loginUser = async (data, result) => {
	try {
		db.query(
			'SELECT * FROM users WHERE login = ?',
			data.login,
			async (err, results) => {
				if (results.length === 0) {
					result(
						{
							message: 'Невірний логін або пароль'
						},
						null
					)
				} else {
					const isValidPass = await bcrypt.compare(
						data.password,
						results[0].passwordHash
					)

					if (!isValidPass) {
						return result('Невірний логін або пароль', null)
					}
					const token = jwt.sign(
						{
							id: results[0].id,
							role: results[0].role
						},
						'Y5u2g2aG5H2uVFe9pHy9'
					)

					let { passwordHash, ...user } = results.pop()

					result(null, { token: token, data: user })
				}
			}
		)
	} catch (err) {
		console.log(err)
		result('Невірний логін або пароль', null)
	}
}
