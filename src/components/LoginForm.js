import React, { useEffect, useState } from 'react'
import env from 'react-dotenv'

const LoginForm = ({ onLogin }) => {
	useEffect(()=>{
		let search = window.location.search;
		let params = new URLSearchParams(search);
		let accessToken  = params.get('accessToken');
		if(accessToken) {
			onLogin(accessToken)
		}
	}, [])

	return (
		<div>
			<a href={`${env.SERVER_URL}/google`}>ログインしてください。</a>
		</div>
	)
}

export default LoginForm
