import React, { useState, useEffect } from 'react'
import { apiUrls_animalfamily } from '../../api/apiUrls'
import {
	TextField,
	TableContainer,
	Table,
	TableHead,
	TableRow,
	TableCell,
	TableBody,
	Paper,
	Button,
} from '@material-ui/core'
import Alert from '@material-ui/lab/Alert'
import axios from 'axios'
// import iconAdd from '../../assets/images/icon-add.png'
const initNotify = {
	type: '',
	message: '',
	isNotify: false,
}

export default function AnimalSpecies() {
	const [speciesText, setSpeciesText] = useState('')
	const [showNotify, setShowNotify] = useState(initNotify)
	const [data, setData] = useState([])
	const [isEdit, setIsEdit] = useState(false)
	const [idEdit, setIdEdit] = useState()
	const [loading, setLoading] = useState(false)
	function loadData() {
		axios
			.get(`${apiUrls_animalfamily}/getAnimalFamilyList`)
			.then(({ data }) => {
				setData(data.content)
			})
	}

	useEffect(() => {
		loadData()
		return () => {}
	}, [])

	function createData(name, calories, id, carbs, protein) {
		return { name, calories, id, carbs, protein }
	}

	// var rows = [
	// 	createData(1, "huygggggggg ggggggggg", 6.0, 24, 4.0),
	// 	createData(2, 237, 9.0, 37, 4.3),
	// 	createData(3, 262, 16.0, 24, 6.0),
	// 	createData(4, 305, 3.7, 67, 4.3),
	// 	createData(5, 356, 16.0, 49, 3.9),
	// ]

	let rows = []

	if (data.length > 0) {
		rows = data.map((item, idx) => {
			return createData(idx + 1, item.ten_ho, item.ma_ho, 37, 4.3)
		})
	}

	function eventNotify(data) {
		setShowNotify({
			type: 'success',
			isNotify: true,
			message: data.message,
		})

		setLoading(false)
		setTimeout(() => setShowNotify(initNotify), 2000)
	}

	function handleAddSpecies() {
		if (window.confirm('Xác nhận thêm Họ động vật')) {
			setLoading(true)
			axios
				.post(`${apiUrls_animalfamily}/insertAnimalFamily`, {
					ten_ho: speciesText,
				})
				.then(({ data }) => {
					eventNotify(data)
					loadData()
				})
				.catch(err => {
					eventNotify(err)
				})
		}
		setSpeciesText('')
	}

	function onClickEdit(id, name) {
		setIsEdit(true)
		setSpeciesText(name)
		setIdEdit(id)
	}

	function onClickCancel() {
		setIsEdit(false)
		setSpeciesText('')
	}

	function handleEdit() {
		setLoading(true)
		axios
			.put(`${apiUrls_animalfamily}/updateAnimalFamily`, {
				ten_ho: speciesText,
				ma_ho: idEdit,
			})
			.then(({ data }) => {
				eventNotify(data)
				loadData()
			})
			.catch(err => {
				eventNotify(err)
			})
		setIsEdit(false)
		setSpeciesText('')
	}

	function onClickDelete(id) {
		if (window.confirm('Xác nhận xóa Họ động vật')) {
			setLoading(true)
			axios
				.delete(
					`${apiUrls_animalfamily}/deleteAnimalFamily?ma_ho=${id}`
				)
				.then(({ data }) => {
					eventNotify(data)
					loadData()
				})
				.catch(err => {
					eventNotify(err)
				})
		}
	}

	return (
		<div className="layout-animalfamily">
			{showNotify.isNotify && (
				<Alert severity={showNotify.type}>{showNotify.message}</Alert>
			)}
			{loading && (
				<Alert severity="warning">"Đang thực hiện thao tác vui lòng chờ"</Alert>
			)}
			<div className="title">
				<h3>Quản lý danh sách Họ động vật</h3>
			</div>

			<div className="manage-wrap">
				<TextField
					className="textInput"
					variant="outlined"
					size="small"
					label="Nhập Họ động vật"
					value={speciesText}
					onChange={e => setSpeciesText(e.target.value)}
				/>
				<div className="gp-btn-edit">
					{isEdit ? (
						<>
							<button className="edit-btn" onClick={handleEdit}>
								Chỉnh sửa
							</button>
							<button className="cancel-btn" onClick={onClickCancel}>
								Hủy
							</button>
						</>
					) : (
						<button
							variant="outlined"
							color="succeess"
							onClick={handleAddSpecies}
							className="add-btn"
						>
							Thêm
						</button>
					)}
				</div>
			</div>

			<div style={{ overflow: 'auto', height: 500}} className="table-family">
				<TableContainer component={Paper}>
					<Table sx={{ minWidth: 650 }} aria-label="simple table">
						<TableHead>
							<TableRow>
								<TableCell style={{ width: '100px' }}>STT</TableCell>
								<TableCell>Họ động vật</TableCell>
								<TableCell style={{ width: '5%' }}></TableCell>
								<TableCell style={{ width: '5%' }}></TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{rows.map(row => (
								<TableRow
									key={row.name}
									sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
								>
									<TableCell>{row.name}</TableCell>
									<TableCell>{row.calories}</TableCell>
									<TableCell>
										<Button
											variant="outlined"
											color="primary"
											onClick={() => onClickEdit(row.id, row.calories)}
										>
											Sửa
										</Button>
									</TableCell>
									<TableCell>
										<Button
											variant="outlined"
											color="secondary"
											onClick={() => onClickDelete(row.id)}
										>
											Xóa
										</Button>
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			</div>
		</div>
	)
}
