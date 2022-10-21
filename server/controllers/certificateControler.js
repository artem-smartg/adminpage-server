import pdf from 'pdf-creator-node'
import * as fs from 'fs'
import path from 'path'
import { v1 as uuidv4 } from 'uuid'

const __dirname = path.resolve()

const html = fs.readFileSync(
	path.join(__dirname, './server/controllers/template.html'),
	'utf8'
)

var options = {
	format: 'A4',
	orientation: 'landscape'
}

export const createCertificate = (req, res) => {
	try {
		const userData = req.body
		const bitmap = fs.readFileSync(
			path.join(__dirname, './server/controllers/bg.jpg')
		)

		const fileName = uuidv4().toString()

		let rate = ''

		let msg = ''

		if (userData.count <= 10) {
			rate = 'Низький'
		} else if (userData.count > 10 && userData.count <= 20) {
			rate = 'Середній'
		} else {
			rate = 'Високий'
		}

		if (userData.gender === 'male') {
			msg = 'пройшов тестування на платформі'
		} else {
			msg = 'пройшла тестування на платформі'
		}

		var document = {
			html: html,
			data: {
				users: [
					{
						name:
							userData.name.split(' ')[1] + ' ' + userData.name.split(' ')[2],
						surName: userData.name.split(' ')[0],
						count: userData.count,
						rate: rate,
						msg: msg,
						logo: bitmap.toString('base64')
					}
				]
			},
			path: path.join(__dirname, `./certificates/${fileName}.pdf`),
			type: ''
		}

		pdf
			.create(document, options)
			.then(data => {
				res.json('/certificates/' + fileName + '.pdf')
			})
			.catch(error => {
				console.error(error)
			})
	} catch (err) {
		res.status(400).json({
			message: 'Помилка'
		})
	}
}

// export const getCertificate = (req, res) => {
// 	try {
// 		const data = req.params.id
// 		getAllTasks(data, (err, results) => {
// 			if (err) {
// 				res.status(400).json({
// 					message: err
// 				})
// 			} else {
// 				res.status(200).json(results)
// 			}
// 		})
// 	} catch (err) {
// 		res.status(400).json({
// 			message: 'Помилка'
// 		})
// 	}
// }
