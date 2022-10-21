import {
	createNewCategory,
	getAllCategories,
	getSomeCategory,
	updateSomeCategory,
	deleteSomeCategory
} from '../models/categoryModel.js'

export const createCategory = (req, res) => {
	try {
		const data = req.body
		createNewCategory(data, (err, results) => {
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

export const getCategories = (req, res) => {
	try {
		const data = req.body
		getAllCategories(data, (err, results) => {
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

export const getCategory = (req, res) => {
	try {
		const data = req.params.id
		getSomeCategory(data, (err, results) => {
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

export const updateCategory = (req, res) => {
	try {
		const data = req.body
		updateSomeCategory(data, (err, results) => {
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

export const deleteCategory = (req, res) => {
	try {
		const data = req.params.id
		deleteSomeCategory(data, (err, results) => {
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
