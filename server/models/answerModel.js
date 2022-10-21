import db from '../config/config.js'

export const createNewAnswer = async (data, result) => {
	try {
		db.query('INSERT INTO answers SET ?', [data], (err, results) => {
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

export const getAllAnswers = async (data, result) => {
	try {
		db.query('SELECT * FROM answers', (err, results) => {
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

export const getSomeAnswer = async (data, result) => {
	try {
		db.query('SELECT * FROM answers WHERE id = ?', data, (err, results) => {
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

export const updateSomeAnswer = async (data, result) => {
	try {
		db.query(
			'UPDATE answers SET ? WHERE id = ?',
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

export const deleteSomeAnswer = async (data, result) => {
	try {
		db.query('DELETE FROM answers WHERE id = ?', data, (err, results) => {
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
