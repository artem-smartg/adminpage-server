import jwt from 'jsonwebtoken'

export default (req, res, next) => {
	const token = (req.headers.authorization || '').replace(/Bearer\s?/, '')

	if (token) {
		try {
			const decoded = jwt.verify(token, 'Y5u2g2aG5H2uVFe9pHy9')

			if (decoded.role === 'User') {
				return res.status(403).json({
					message: 'Доступ обмежено'
				})
			} else {
				next()
			}
		} catch (err) {
			return res.status(403).json({
				message: 'Доступ обмежено'
			})
		}
	} else {
		return res.status(403).json({
			message: 'Доступ обмежено'
		})
	}
}
