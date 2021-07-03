import React, { useState, useEffect } from 'react'

const DateForm = ({ token }) => {
	const [title, setTitle] = useState('')
	const [address, setAddress] = useState('')
	const [description, setDescription] = useState('')
	const [start, setStart] = useState('')
	const [startTime, setStartTime] = useState('')
	const [end, setEnd] = useState('')
	const [endTime, setEndTime] = useState('')
	const [color, setColor] = useState(1)

	const [disabled, setDisabled] = useState(true)

	useEffect(() => {
		if (token.trim().length > 0) {
			setDisabled(false)
		}
	}, [token])

	const onSubmitHandler = (e) => {
		e.preventDefault()
		console.log(title, address, description, start, end, color, token)

		const data = {
			title,
			address,
			description,
			start,
			startTime,
			end,
			endTime,
			color,
			token
		}

		fetch(`${process.env.REACT_APP_SERVER_URL}/send-event`, {
			method: 'POST',
			mode: 'cors',
			headers: {
				'Content-Type': 'application/json'
			}, body: JSON.stringify(data)
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

	const onColorChangeHandler = (e) => {
		setColor(e.target.value)
	}
	return (
		<>
			<form onSubmit={onSubmitHandler}>
				<label htmlFor='title' >タイトル</label>
				<input disabled={disabled} onChange={onTitleChangeHandler} id='title' value={title} type='text' />
				<br />
				<label htmlFor='address'>住所</label>
				<input disabled={disabled} onChange={onAddressChangeHandler} id='address' value={address} type='text' />

				<br />
				<label htmlFor='description'>説明</label>
				<input disabled={disabled} onChange={onDescriptionChangeHandler} id='description' value={description} type='text' />

				<br />
				<label htmlFor='start'>開始</label>
				<input disabled={disabled} onChange={onStartChangeHandler} id='start' value={start} type='date' />

				<br />
				<label htmlFor='startTime'>開始時間</label>
				<input disabled={disabled} onChange={onStartTimeChangeHandler} id='startTime' value={startTime} type='time' />

				<br />
				<label htmlFor='end'>終了</label>
				<input disabled={disabled} onChange={onEndChangeHandler} id='end' value={end} type='date' />

				<br />
				<label htmlFor='endTime'>終了時間</label>
				<input disabled={disabled} onChange={onEndTimeChangeHandler} id='endTime' value={endTime} type='time' />
				<br />
				<label htmlFor='color'>色</label>
				<input disabled={disabled} onChange={onColorChangeHandler} id='color' value={color} type='number' />


				{/* <input type="color" disabled={disabled} onChange={onColorChangeHandler} list="presetColors" />
				<datalist id="presetColors">
					<option value='1'>#7986CB</option>
					<option value='2'>#33B679</option>
					<option value='3'>#8E24AA</option>
					<option value='4'>#E67C73</option>
					<option value='5'>#F6BF26</option>
					<option value='6'>#F4511E</option>
					<option value='7'>#039BE5</option>
					<option value='8'>#616161</option>
					<option value='9'>#3F51B5</option>
					<option value='10'>#0B8043</option>
					<option value='11'>#D50000</option>
				</datalist> */}

				<br />
				<button type='submit'>登録する</button>
			</form>
		</>
	)
}

export default DateForm
