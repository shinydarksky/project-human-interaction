import React, { useEffect } from 'react'
import LoginForm from '../LoginForm'
import './style.scss'
// HOOKS
import { useHistory } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
// ACTIONS
import { signInUser } from '../../../redux/authSlice'
// UTILS
// import customAlerts from 'utils/customAlerts'

function LoginPage() {
	const history = useHistory()
	const dispatch = useDispatch()
	// user, 
	const {isAuth , loading } = useSelector(state => state.auth)
	const loginData = useSelector(state=>state.auth)

	async function handleSubmit(values) {
		console.log('-------------------->',values)
		const newLogin = signInUser(values)
		dispatch(newLogin)
		// try {
		// 	await dispatch(signInUser(values)).unwrap()
		// } catch (err) {
		// 	customAlerts.error('Cảnh báo!', err.message)
		// }
	}


	useEffect(() => {
		const accessToken = localStorage.getItem('accessToken')

		
		if(accessToken){
			const newLogin = signInUser(loginData)
			dispatch(newLogin)
		}


		if (isAuth) {
			// switch (user.role_id) {
				// case 1:
					history.replace('/admin')
					// break
				// case 2:
				// 	history.replace('/admin')
				// 	break
				// default:
				// 	history.replace('/author')
			// }
		}
	})
	
	return (
		<div className="login">
			<LoginForm onSubmit={handleSubmit} submitLoading={loading}  />
		</div>
	)
}

export default LoginPage
