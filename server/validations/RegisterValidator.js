import { body } from 'express-validator'

export const RegisterValidation = [
	body('firstName', 'Поле Іʼя порожнє').notEmpty(),
	body('surName', 'Поле Прізвище порожнє').notEmpty(),
	body('login', 'Поле Логін порожнє').notEmpty().optional(),
	body('phone', 'Поле телефон порожнє').notEmpty(),
	body('email', 'Перевырте правильність введеня пошти')
		.notEmpty()
		.isEmail()
		.normalizeEmail(),
	body('gender', 'Поле стать порожнє').notEmpty()
]
