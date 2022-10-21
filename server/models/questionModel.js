import db from '../config/config.js'

export const createNewQuestion = async (data, result) => {
	try {
		db.query('INSERT INTO questions SET ?', [data], (err, results) => {
			if (err) {
				return result(err, null)
			} else {
				return result(null, results)
			}
		})
	} catch (err) {
		console.log(err)
	}
}

export const getAllQuestions = async (data, result) => {
	try {
		const query1 = 'SELECT * FROM questions WHERE task = ? AND category = ?'
		const query2 = 'SELECT * FROM questions WHERE task = ?'
		db.query(
			data.category ? query1 : query2,
			[data.task, data.category],
			(err, results) => {
				if (err) {
					return result(err, null)
				} else {
					let ids = []
					results.forEach(elem => ids.push(elem.id))
					db.query(
						'SELECT * FROM answers WHERE question IN (?)',
						[ids],
						(err, answers) => {
							if (err) {
								return result(err, null)
							} else {
								results.forEach(question => {
									let newAnswers = answers.filter(
										answer => answer.question === question.id
									)
									question.answers = newAnswers
								})
								return result(null, results)
							}
						}
					)
				}
			}
		)
	} catch (err) {
		console.log(err)
	}
}

export const getSomeQuestion = async (data, result) => {
	try {
		db.query('SELECT * FROM questions WHERE id = ?', data, (err, results) => {
			if (err) {
				return result(err, null)
			} else {
				let ids = []
				results.forEach(elem => ids.push(elem.id))
				db.query(
					'SELECT * FROM answers WHERE question IN (?)',
					[ids],
					(err, answers) => {
						if (err) {
							return result(err, null)
						} else {
							results.forEach(question => {
								let newAnswers = answers.filter(
									answer => answer.question === question.id
								)
								question.answers = newAnswers
							})
							return result(null, results)
						}
					}
				)
			}
		})
	} catch (err) {
		console.log(err)
	}
}

export const updateSomeQuestion = async (data, result) => {
	try {
		db.query(
			'UPDATE questions SET ? WHERE id = ?',
			[data, data.id],
			(err, results) => {
				if (err) {
					return result(err, null)
				} else {
					return result(null, results)
				}
			}
		)
	} catch (err) {
		console.log(err)
	}
}

export const deleteSomeQuestion = async (data, result) => {
	try {
		db.query('DELETE FROM questions WHERE id = ?', data, (err, results) => {
			if (err) {
				return result(err, null)
			} else {
				return result(null, results)
			}
		})
	} catch (err) {
		console.log(err)
	}
}
