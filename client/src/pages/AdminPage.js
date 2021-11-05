import React, { useState, useEffect } from 'react'
import './AdminPage.scss'
import DashBoard from '../components/DashBoard'
import { useDispatch, useSelector } from 'react-redux'
import { setLogout, loadLogin } from '../redux/authSlice'
import { useHistory } from 'react-router'
import { Redirect } from 'react-router-dom'
import TopNav from '../components/TopNav'
import Footer from '../components/Footer'
import iconMenu from '../assets/images/icon-menu.png'
const AdminPage = () => {
	const [selectBoard, setSelectBoard] = useState(2)
	const [openMenu, setOpenMenu] = useState(false)
	const dispatch = useDispatch()
	const history = useHistory()

	const { isAuth } = useSelector(state => state.auth)

	function loadUser() {
		dispatch(loadLogin())
	}
	useEffect(loadUser, [dispatch])

	if (!isAuth) {
		return <Redirect to="/login" />
	}

	const handdleSelectBoard = type => {
		setSelectBoard(type)
	}

	return (
		<div className="container-fluid justify-content-center align-items-center">
			<TopNav />
			<div className="row" style={{ marginTop: '60px' }}>
				<div className=" tool-bar col-md-2 col-sm-3">
					<div className="tool-logo">Quản lý</div>
					<div className="tool-item" onClick={() => handdleSelectBoard(2)}>
						Thông tin
					</div>
					<div className="tool-item" onClick={() => handdleSelectBoard(0)}>
						Danh sách động vật
					</div>
					<div className="tool-item" onClick={() => handdleSelectBoard(1)}>
						Danh sách họ
					</div>

					<div
						className="tool-item"
						onClick={() => {
							dispatch(setLogout())
							history.replace('/login')
						}}
					>
						Đăng xuất
					</div>
				</div>
				<div className="logo-mobile">
					<button onClick={() => setOpenMenu(!openMenu)}>
						<img src={iconMenu} alt="icon-menu" />
					</button>
					<div className="title">Quản lý</div>
					{openMenu && (
						<div className="mobile-menu">
							<div
								className="mobile-menu-item"
								onClick={() => handdleSelectBoard(2)}
							>
								Thông tin
							</div>
							<div
								className="mobile-menu-item"
								onClick={() => handdleSelectBoard(0)}
							>
								Danh sách động vật
							</div>
							<div
								className="mobile-menu-item"
								onClick={() => {
									dispatch(setLogout())
									history.replace('/login')
								}}
							>
								Đăng xuất
							</div>
						</div>
					)}
				</div>
				<div className="layout-tool col-sm-9 col-md-10">
					<DashBoard boardType={selectBoard} />
				</div>
			</div>
			<Footer />
		</div>
	)
}

export default AdminPage
