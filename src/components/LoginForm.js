import React, { useEffect, useState } from 'react'
import './LoginForm.css'

const loginUrl = `${process.env.REACT_APP_SERVER_URL}/google`
const LoginForm = ({ onLogin }) => {
	const [search, setSearch] = useState('')
	useEffect(()=>{
		setSearch(window.location.search)
		let params = new URLSearchParams(search);
		let accessToken  = params.get('accessToken');
		if(accessToken) {
			onLogin(accessToken)
		}
	}, [search, onLogin])

	return (
		<div className='login-button-section'>
			<a className='button' href={loginUrl}>Googleにログインしてください。</a>
		</div>
	)
}

export default LoginForm
