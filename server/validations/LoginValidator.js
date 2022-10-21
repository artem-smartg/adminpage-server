import { body } from 'express-validator'

export const LoginValidation = [
	body('login', 'Поле логін порожнє').notEmpty(),
	body('password', 'Поле пароль порожнє').notEmpty()
]
