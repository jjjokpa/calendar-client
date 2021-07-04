import React, { useEffect, useState } from 'react'
import './Header.css'

const loginUrl = `${process.env.REACT_APP_SERVER_URL}/google`
const Header = ({ onLogin }) => {
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
			<ul>
				<li><div className='title'>日程を登録</div></li>
				<li>
					{
						!logined &&
						<div className='login-button-section'>
							<a className='login-button' href={loginUrl}>まず、Googleにログインしてください。</a>
						</div>
					}
				</li>
			</ul>
		</>
	)
}

export default Header
