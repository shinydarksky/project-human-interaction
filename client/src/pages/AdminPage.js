import React, { useState,useEffect } from 'react'
import './AdminPage.scss'
import DashBoard from '../components/DashBoard'
import { useDispatch, useSelector } from 'react-redux'
import { setLogout } from '../redux/authSlice'
import { useHistory } from 'react-router'

const AdminPage = () => {
    const [selectBoard, setSelectBoard] = useState(0)
    const dispatch = useDispatch()
	const history = useHistory()

    const {isAuth} = useSelector(state=>state.auth)

    useEffect(() => {
        if(!isAuth){
            history.replace('/login')
        }
    })

    const handdleSelectBoard = type => {
        setSelectBoard(type)
    }



    return (
        <div className="container-fluid justify-content-center align-items-center">
            <div className="row">
                <div className=" tool-bar col-md-3 col-sm-3" >
                    <div className="tool-logo" >
                        Quản lý
                    </div>
                    <div className="tool-item"
                        onClick={() => handdleSelectBoard(0)}
                    >
                        Danh sách động vật
                    </div>
                    <div className="tool-item"
                        onClick={() => handdleSelectBoard(1)}
                    >
                        Danh sách loài
                    </div>
                    <div className="tool-item"
                        onClick={() => handdleSelectBoard(2)}
                    >
                        Cài đặt
                    </div>
                    <div className="tool-item"
                        onClick={() => {
                            dispatch(setLogout())
                        }}
                    >
                        Đăng xuất
                    </div>
                </div>
                <div className="layout-tool col-sm-8 col-md-9">
                    <div className="logo-mobile" >
                        <button>Mở</button>
                        Quản lý
                    </div>
                    <DashBoard boardType={selectBoard} />
                </div>
            </div>
        </div>
    )
}

export default AdminPage
