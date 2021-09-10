import React from 'react'
import { Redirect } from "react-router-dom";
import LoginFrom from '../components/LoginFrom';
const Auth = ({authRoute}) => {
    let isLogin = true
    let isLoadLogin = true
    let body 
    if (isLoadLogin) {
        body = (
            <>
            {authRoute === 'login' && <LoginFrom/>}
            </>
        )
    }
    else if(isLogin) return <Redirect to="/admin"/>

    return (
        <div>
            {body}
        </div>
    )
}

export default Auth
