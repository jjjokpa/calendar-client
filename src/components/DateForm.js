import React, { useState, useEffect } from 'react'
import './DateForm.css'

const DateForm = ({ token }) => {
	const [title, setTitle] = useState('')
	const [address, setAddress] = useState('')
	const [description, setDescription] = useState('')
	const [start, setStart] = useState('')
	const [startTime, setStartTime] = useState('')
	const [end, setEnd] = useState('')
	const [endTime, setEndTime] = useState('')
	const [success, setSuccess] = useState(false)
	const [message, setMessage] = useState('')

	const [disabled, setDisabled] = useState(true)

	useEffect(() => {
		const today = new Date()

		const defaultStartDate = today.toISOString().split('T')[0]
		const defaultEndDate = today.toISOString().split('T')[0]
		const defaultStartTime = today.toISOString().split('T')[1].split('Z')[0]
		const defaultEndTime = today.toISOString().split('T')[1].split('Z')[0]

		setStart(defaultStartDate)
		setEnd(defaultEndDate)
		setStartTime(defaultStartTime)
		setEndTime(defaultEndTime)
	}, [])

	useEffect(() => {
		if (token.trim().length > 0) {
			setDisabled(false)
		}
	}, [token])

	const onSubmitHandler = (e) => {
		e.preventDefault()
		// console.log(title, address, description, start, end, color, token)

		const data = {
			title,
			address,
			description,
			start,
			startTime,
			end,
			endTime,
			color: 1,
			token
		}

		fetch(`${process.env.REACT_APP_SERVER_URL}/send-event`, {
			method: 'POST',
			mode: 'cors',
			headers: {
				'Content-Type': 'application/json'
			}, body: JSON.stringify(data)
		})
			.then(res => res.json())
			.then(data => {
				if (data.status === 200) {
					setSuccess(true)
					setMessage(data.message)
				} else {
					setSuccess(false)
					setMessage(data.message)
				}
			})
	}

	const onTitleChangeHandler = (e) => {
		setTitle(e.target.value)
	}

	const onAddressChangeHandler = (e) => {
		setAddress(e.target.value)
	}

	const onDescriptionChangeHandler = (e) => {
		setDescription(e.target.value)
	}
	const onStartChangeHandler = (e) => {
		setStart(e.target.value)
	}

	const onStartTimeChangeHandler = (e) => {
		setStartTime(e.target.value)
	}

	const onEndChangeHandler = (e) => {
		setEnd(e.target.value)
	}

	const onEndTimeChangeHandler = (e) => {
		setEndTime(e.target.value)
	}

	return (
		<div className='container'>
			<form onSubmit={onSubmitHandler}>
				<div>
					<label className='inline-label' htmlFor='title' >タイトル</label>
					<input disabled={disabled} onChange={onTitleChangeHandler} id='title' value={title} type='text' />
				</div>

				<div>
					<label className='inline-label' htmlFor='address'>場所</label>
					<input disabled={disabled} onChange={onAddressChangeHandler} id='address' value={address} type='text' />
				</div>

				<div>
					<label className='inline-label' htmlFor='description'>詳細</label>
					<input disabled={disabled} onChange={onDescriptionChangeHandler} id='description' value={description} type='text' />
				</div>

				<div>
					<label className='inline-label' htmlFor='start'>開始</label>
					<input disabled={disabled} onChange={onStartChangeHandler} id='start' value={start} type='date' />
				</div>

				<div>
					<label className='inline-label' htmlFor='startTime'>開始時間</label>
					<input disabled={disabled} onChange={onStartTimeChangeHandler} id='startTime' value={startTime} type='time' />
				</div>

				<div>
					<label className='inline-label' htmlFor='end'>終了</label>
					<input disabled={disabled} onChange={onEndChangeHandler} id='end' value={end} type='date' />
				</div>
				<div>
					<label className='inline-label' htmlFor='endTime'>終了時間</label>
					<input disabled={disabled} onChange={onEndTimeChangeHandler} id='endTime' value={endTime} type='time' />
				</div>
				<hr />

				{message.trim().length > 0 &&
					<h3 style={
						success ?
							{ color: '#0B8043', fontWeight: '400' } :
							{ color: '#D50000', fontWeight: '400' }}>
						{message}</h3>}

				<br />
				{title.trim().length > 0 &&
					<div className='button-section'>
						<button className='button' type='submit'>登録する</button>
					</div>
				}
			</form>
		</div>
	)
}

export default DateForm
