import React, { useEffect, useState } from 'react'

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
			<a href='http://localhost:3001/google'>ログインしてください。</a>
		</div>
	)
}

export default LoginForm
