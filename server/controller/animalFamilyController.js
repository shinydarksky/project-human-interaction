import db from '../db.js'

export const getAnimalFamilyList = (req, res) => {
	const query = 'SELECT * FROM HO_DV'

	db.query(query, (err, response) => {
		if (err) {
			res.sendStatus(500)
			return
		}

		res.status(200).json({
			message: 'Lấy danh sách con vật thành công!',
			statusCode: 200,
			content: response,
		})
	})
}

export const insertAnimalFamily = (req, res) => {
	const query = 'INSERT INTO HO_DV SET ?'

	db.query(query, [req.body], (err, response) => {
		if (err) {
			res.sendStatus(500)
			return
		}

		res.status(200).json({
			message: 'Thêm con vật thành công!',
			statusCode: 200,
		})
	})
}

export const updateAnimalFamily = (req, res) => {
	const { ma_ho, ...data } = req.body
	const query = 'UPDATE HO_DV SET ? WHERE ma_ho = ?'

	db.query(query, [data, ma_ho], (err, response) => {
		if (err) {
			res.sendStatus(500)
			return
		}

		res.status(200).json({
			message: 'Cập nhật con vật thành công!',
			statusCode: 200,
		})
	})
}

export const deleteAnimalFamily = (req, res) => {
	const { ma_ho } = req.query
	const query = 'DELETE FROM HO_DV WHERE ma_ho = ?'

	db.query(query, [ma_ho], (err, response) => {
		if (err) {
			res.sendStatus(500)
			return
		}

		res.status(200).json({
			message: 'Xóa con vật thành công!',
			statusCode: 200,
		})
	})
}
