import React from 'react'
import { Redirect } from "react-router-dom";
import Login from '../components/Login/Login'
import {useSelector } from 'react-redux'

const Auth = ({authRoute}) => { 
    const {isAuth} = useSelector(state => state.auth)
    
    let body 
    if (!isAuth) {
        body = (
            <>
            {authRoute === 'login' && <Login/>}
            </>
        )
    }
    else if(isAuth) return <Redirect to="/admin"/>

    return (
        <div>
            {body}
        </div>
    )
}

export default Auth
