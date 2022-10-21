import {
	createNewQuestion,
	getAllQuestions,
	getSomeQuestion,
	updateSomeQuestion,
	deleteSomeQuestion
} from '../models/questionModel.js'

export const createQuestion = (req, res) => {
	try {
		const data = req.body
		createNewQuestion(data, (err, results) => {
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

export const getQuestions = (req, res) => {
	try {
		const data = req.params
		getAllQuestions(data, (err, results) => {
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

export const getQuestion = (req, res) => {
	try {
		const data = req.params.id
		getSomeQuestion(data, (err, results) => {
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

export const updateQuestion = (req, res) => {
	try {
		const data = req.body
		updateSomeQuestion(data, (err, results) => {
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

export const deleteQuestion = (req, res) => {
	try {
		const data = req.params.id
		deleteSomeQuestion(data, (err, results) => {
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
