import React from 'react'
import './Button.css'

const Button = ({
	type,
	label,
	onClick
}) => {
	const onClickHandler = (e)=> {
		onClick()
	}

	return (
		<div className='button-section'>
			<button onClick={onClickHandler} className='button' type={type}>{label}</button>
		</div>
	)
}

export default Button
