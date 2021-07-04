import React from 'react'
import './Input.css'

const Input = (
	{
		disabled,
		name,
		label,
		type,
		onChange,	
		value
	}
) => {

	const onChageHandler = (e) => {
		onChange(e.target.value)	
	}

	return (
		<div className='input-container'>
			<label className='label' htmlFor={name} >{label}</label>
			<input disabled={disabled} onChange={onChageHandler} id={name} value={value} type={type} />
		</div>
	)
}

export default Input
