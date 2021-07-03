import React, { useEffect, useState } from 'react'

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
		<div>
			<a href={loginUrl}>ログインしてください。</a>
		</div>
	)
}

export default LoginForm
