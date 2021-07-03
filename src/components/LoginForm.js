import React, { useEffect, useState } from 'react'
import './LoginForm.css'

const loginUrl = `${process.env.REACT_APP_SERVER_URL}/google`
const LoginForm = ({ onLogin }) => {
	const [search, setSearch] = useState('')
	const [logined, setLogined] = useState(false)

	useEffect(() => {
		setSearch(window.location.search)
		let params = new URLSearchParams(search);
		let accessToken = params.get('accessToken');
		if (accessToken) {
			onLogin(accessToken)
			setLogined(true)
		}
	}, [search, onLogin])

	return (
		<>
			{
				!logined &&
				<div className='login-button-section'>
					<a className='button' href={loginUrl}>Googleにログインしてください。</a>
				</div>
			}
		</>
	)
}

export default LoginForm
