import React, { useState, useEffect } from 'react'
import { apiUrls_animalfamily } from '../../api/apiUrls'
import {
	TableContainer,
	Table,
	TableHead,
	TableRow,
	TableCell,
	TableBody,
	Paper,
	Button,
	Dialog,
	DialogTitle,
	DialogContent,
} from '@material-ui/core'
import Alert from '@material-ui/lab/Alert'
import axios from 'axios'
import AddFamilyForm from '../Forms/AddFamily'
import EditFamilyForm from '../Forms/EditFamily'
// import iconAdd from '../../assets/images/icon-add.png'
const initNotify = {
	type: '',
	message: '',
	isNotify: false,
}

export default function AnimalSpecies() {
	const [showNotify, setShowNotify] = useState(initNotify)
	const [data, setData] = useState([])
	const [family, setFamily] = useState(null)
	const [loading, setLoading] = useState(false)
	const [openFamily, setOpenFamily] = useState(false)
	const [openEditFamily, setOpenEditFamily] = useState(false)

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

	function createData(index, ma_ho, ten_ho, mo_ta) {
		return { index, ma_ho, ten_ho, mo_ta }
	}

	let rows = []

	if (data.length > 0) {
		rows = data.map((item, idx) => {
			return createData(idx + 1, item.ma_ho, item.ten_ho, item.mo_ta)
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
		setOpenFamily(true)
	}

	function onClickDelete(id) {
		if (window.confirm('Xác nhận xóa Họ động vật')) {
			setLoading(true)
			axios
				.delete(`${apiUrls_animalfamily}/deleteAnimalFamily?ma_ho=${id}`)
				.then(({ data }) => {
					eventNotify(data)
					loadData()
				})
				.catch(err => {
					eventNotify(err)
				})
		}
	}

	function handleAddFamilySubmit(values) {
		setLoading(true)
		axios
			.post(`${apiUrls_animalfamily}/insertAnimalFamily`, values)
			.then(({ data }) => {
				eventNotify(data)
				loadData()
			})
			.catch(err => {
				eventNotify(err)
			})
	}

	function handleEditFamilySubmit(values) {
		setLoading(true)
		axios
			.put(`${apiUrls_animalfamily}/updateAnimalFamily`, values)
			.then(({ data }) => {
				eventNotify(data)
				loadData()
			})
			.catch(err => {
				eventNotify(err)
			})

		setOpenEditFamily(false)
	}

	function onClickEdit(data) {
		setFamily(data)
		setOpenEditFamily(true)
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
				<div className="gp-btn-edit">
					<button
						variant="outlined"
						color="succeess"
						onClick={handleAddSpecies}
						className="add-btn"
					>
						Thêm
					</button>
				</div>
			</div>

			<div
				style={{ overflow: 'auto', height: 500, marginTop: '24px' }}
				className="table-family"
			>
				<TableContainer component={Paper}>
					<Table sx={{ minWidth: 650 }} aria-label="simple table">
						<TableHead>
							<TableRow>
								<TableCell style={{ width: '100px' }}>STT</TableCell>
								<TableCell style={{ width: '300px' }}>Họ động vật</TableCell>
								<TableCell>Mô tả</TableCell>
								<TableCell style={{ width: '200px' }}>Thao tác</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{rows.map(row => (
								<TableRow
									key={row.index}
									sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
								>
									<TableCell>{row.index}</TableCell>
									<TableCell>{row.ten_ho}</TableCell>
									<TableCell>
										{row.mo_ta.length <= 250
											? row.mo_ta
											: row.mo_ta.slice(0, 247).concat('...')}
									</TableCell>
									<TableCell>
										<Button
											variant="outlined"
											color="primary"
											style={{ marginRight: '16px' }}
											onClick={() => onClickEdit(row)}
										>
											Sửa
										</Button>
										<Button
											variant="outlined"
											color="secondary"
											onClick={() => onClickDelete(row.ma_ho)}
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
			<Dialog open={openFamily} onClose={() => setOpenFamily(false)}>
				<DialogTitle style={{ textAlign: 'center' }}>
					Thêm họ động vật
				</DialogTitle>
				<DialogContent>
					<AddFamilyForm
						onSubmit={handleAddFamilySubmit}
						onClose={() => setOpenFamily(false)}
					/>
				</DialogContent>
			</Dialog>
			<Dialog open={openEditFamily} onClose={() => setOpenEditFamily(false)}>
				<DialogTitle style={{ textAlign: 'center' }}>
					Cập nhật họ động vật
				</DialogTitle>
				<DialogContent>
					<EditFamilyForm
						family={family}
						onSubmit={handleEditFamilySubmit}
						onClose={() => setOpenEditFamily(false)}
					/>
				</DialogContent>
			</Dialog>
		</div>
	)
}
