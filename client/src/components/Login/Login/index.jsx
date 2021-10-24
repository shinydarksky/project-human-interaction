import React,{useEffect} from 'react'
import LoginForm from '../LoginForm'
import './style.scss'
// HOOKS
import { useDispatch, useSelector } from 'react-redux'
// ACTIONS
import { signInUser } from '../../../redux/authSlice'
// UTILS
// import customAlerts from 'utils/customAlerts'

function LoginPage() {
	const dispatch = useDispatch()
	
	const { loading,isError } = useSelector(state => state.auth)

	async function handleSubmit(values) {
		const newLogin = signInUser(values)
		await dispatch(newLogin)
		if(isError){
			alert(isError)
		}
	}

	useEffect(()=>{
		const acccessToken = localStorage.getItem('accessToken') || sessionStorage.getItem('accessToken')
		if(acccessToken){
			dispatch(signInUser(JSON.parse(acccessToken)))
		}
	},[dispatch])

	
	return (
		<div className="login">
			<LoginForm onSubmit={handleSubmit} submitLoading={loading} />
		</div>
	)
}

export default LoginPage
