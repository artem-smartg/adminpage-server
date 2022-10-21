import {
	createNewAnswer,
	getAllAnswers,
	getSomeAnswer,
	updateSomeAnswer,
	deleteSomeAnswer
} from '../models/answerModel.js'

export const createAnswer = (req, res) => {
	try {
		const data = req.body
		createNewAnswer(data, (err, results) => {
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

export const getAnswers = (req, res) => {
	try {
		const data = req.body
		getAllAnswers(data, (err, results) => {
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

export const getAnswer = (req, res) => {
	try {
		const data = req.params.id
		getSomeAnswer(data, (err, results) => {
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

export const updateAnswer = (req, res) => {
	try {
		const data = req.body
		updateSomeAnswer(data, (err, results) => {
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

export const deleteAnswer = (req, res) => {
	try {
		const data = req.params.id
		deleteSomeAnswer(data, (err, results) => {
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
