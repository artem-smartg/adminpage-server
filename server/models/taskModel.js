import db from '../config/config.js'

export const createNewTask = async (data, result) => {
	try {
		db.query('INSERT INTO tasks SET ?', data, (err, results) => {
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

export const getAllTasks = async (data, result) => {
	try {
		db.query('SELECT * FROM tasks', (err, results) => {
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

export const getSomeTask = async (data, result) => {
	try {
		db.query('SELECT * FROM tasks WHERE id = ?', data, (err, results) => {
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

export const updateSomeTask = async (data, result) => {
	try {
		db.query(
			'UPDATE tasks SET name = ? WHERE id = ?',
			[data.name, data.id],
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

export const deleteSomeTask = async (data, result) => {
	try {
		db.query('DELETE FROM tasks WHERE id = ?', data, (err, results) => {
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
