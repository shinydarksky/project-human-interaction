import db from '../db.js'
const BASE_URL = 'http://localhost:8080'

export const getAnimalList = (req, res) => {
	const query = 'SELECT * FROM dong_vat'

	db.query(query, async (err, response) => {
		if (err) {
			res.sendStatus(500)
			return
		}

		const promises = response.map(animal => {
			return new Promise((resolve, reject) => {
				const query = 'SELECT * FROM anh_dv WHERE ma_dv = ?'

				db.query(query, [animal.ma_dv], (err, response) => {
					if (err) {
						reject()
						return
					}
					animal.images = response
					resolve()
				})
			})
		})

		await Promise.all(promises)

		res.status(200).json({
			message: 'Lấy danh sách động vật thành công!',
			statusCode: 200,
			content: response,
		})
	})
}

export const insertAnimal = (req, res) => {
	const data = req.body
	const query = 'INSERT INTO DONG_VAT SET ?'

	db.query(query, [data], async (err, response) => {
		if (err) {
			res.sendStatus(500)
			return
		}

		const data = {
			ma_dv: response.insertId,
		}

		const promises = req.files.map(file => {
			const query = 'INSERT INTO anh_dv SET ?'
			data.lien_ket = BASE_URL + '/' + file.path.split('\\').slice(1).join('/')

			return new Promise((resolve, reject) => {
				db.query(query, [data], (err, response) => {
					if (err) {
						reject()
						return
					}
					resolve()
				})
			})
		})
		await Promise.all(promises)
		res.status(200).json({
			message: 'Thêm động vật thành công!',
			statusCode: 200,
		})
	})
}

export const updateAnimal = (req, res) => {
	const { ma_dv, ...data } = req.body
	const query = 'UPDATE DONG_VAT SET ? WHERE ma_dv = ?'

	db.query(query, [data, ma_dv], (err, response) => {
		if (err) {
			res.sendStatus(500)
			return
		}

		res.status(200).json({
			message: 'Cập nhật động vật thành công!',
			statusCode: 200,
		})
	})
}

export const deleteAnimal = (req, res) => {
	const { ma_dv } = req.query
	const query = 'DELETE FROM ANH_DV WHERE ma_dv = ?'

	db.query(query, [ma_dv], (err, response) => {
		if (err) {
			res.sendStatus(500)
			return
		}

		const query = 'DELETE FROM DONG_VAT WHERE ma_dv = ?'

		db.query(query, [ma_dv], (err, response) => {
			if (err) {
				res.sendStatus(500)
				return
			}

			res.status(200).json({
				message: 'Xóa động vật thành công!',
				statusCode: 200,
			})
		})
	})
}
