import {
	createNewTask,
	getAllTasks,
	getSomeTask,
	updateSomeTask,
	deleteSomeTask
} from '../models/taskModel.js'

export const createTask = (req, res) => {
	try {
		const data = req.body
		createNewTask(data, (err, results) => {
			if (err) {
				res.status(400).json({
					message: err
				})
			} else {
				res.status(201).json(results)
			}
		})
	} catch (err) {
		res.status(400).json({
			message: 'Помилка створення'
		})
	}
}

export const getTasks = (req, res) => {
	try {
		const data = req.body
		getAllTasks(data, (err, results) => {
			if (err) {
				res.status(400).json({
					message: err
				})
			} else {
				res.status(200).json(results)
			}
		})
	} catch (err) {
		res.status(400).json({
			message: 'Помилка'
		})
	}
}

export const getTask = (req, res) => {
	try {
		const data = req.params.id
		getSomeTask(data, (err, results) => {
			if (err) {
				res.status(400).json({
					message: err
				})
			} else {
				res.status(200).json(results)
			}
		})
	} catch (err) {
		res.status(400).json({
			message: 'Помилка'
		})
	}
}

export const updateTask = (req, res) => {
	try {
		const data = req.body
		updateSomeTask(data, (err, results) => {
			if (err) {
				res.status(400).json({
					message: err
				})
			} else {
				res.status(200).json(results)
			}
		})
	} catch (err) {
		res.status(400).json({
			message: 'Помилка'
		})
	}
}

export const deleteTask = (req, res) => {
	try {
		const data = req.params.id
		deleteSomeTask(data, (err, results) => {
			if (err) {
				res.status(400).json({
					message: err
				})
			} else {
				res.status(200).json(results)
			}
		})
	} catch (err) {
		res.status(400).json({
			message: 'Помилка'
		})
	}
}
