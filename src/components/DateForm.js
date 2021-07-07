import React, { useState, useEffect } from 'react'
import MessageOut from './MessageOut'
import Spinner from './Spinner'
import Input from '../UI/Input'
import Button from '../UI/Button'
import axios from 'axios'

import './DateForm.css'

const DateForm = ({ token }) => {

	// sending data
	const [title, setTitle] = useState('')
	const [address, setAddress] = useState('')
	const [description, setDescription] = useState('')
	const [start, setStart] = useState('')
	const [startTime, setStartTime] = useState('')
	const [end, setEnd] = useState('')
	const [endTime, setEndTime] = useState('')

	// control data
	const [success, setSuccess] = useState(false)
	const [message, setMessage] = useState('')
	const [loading, setLoading] = useState(false)
	const [disabled, setDisabled] = useState(true)
	const [touched, setTouched] = useState(false)

	const setDefaultData = () => {
		const today = new Intl.DateTimeFormat('ja-JP', { year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit", timeZone: "Asia/Tokyo" }).format(new Date())

		// console.log(today.split(' ')[0].replaceAll('/', '-'))
		const defaultDate = today.split(' ')[0].replaceAll('/', '-');
		const defaultTimeList = `${today.split(' ')[1]}`.split(':')
		const defaultTime = `${defaultTimeList[0]}:${defaultTimeList[1]}`

		setStart(defaultDate)
		setEnd(defaultDate)
		setStartTime(defaultTime)
		setEndTime(defaultTime)
	}

	// useEffect(() => {
	// 	setTouched(false)
	// }, [])


	useEffect(() => {
		if (token.trim().length > 0) {
			setDisabled(false)
		}
	}, [token])

	const onSubmitHandler = (e) => {
		e.preventDefault()

		// send data
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

		sendingData(data)
	}

	const showLoading = (value) => {
		setLoading(value)
	}

	const sendingData = async (data) => {

		showLoading(true)
		setMessage('')

		try {

			// send request
			const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/send-event`,
				data,
				{ headers: { 'Content-Type': 'application/json' } }
			)

			// extract data
			const { status, message } = response.data

			// check result
			if (status === 200) {
				setSuccess(true)
				setMessage(message)
			} else {
				setSuccess(false)
				setMessage(message)
			}

			showLoading(false)

		} catch (error) {
			const { message } = error.response.data
			setSuccess(false)
			setMessage(message)
			console.error(error.message)

			showLoading(false)
		}
	}

	const onTitleChangeHandler = (newTitle) => {
		if (!touched) {
			setDefaultData()
			setTouched(true)
		}
		setTitle(newTitle)
	}

	const onAddressChangeHandler = (newAddr) => {
		setAddress(newAddr)
	}

	const onDescriptionChangeHandler = (newDesc) => {
		setDescription(newDesc)
	}
	const onStartChangeHandler = (newStart) => {
		setStart(newStart)
	}

	const onStartTimeChangeHandler = (newStartTime) => {
		setStartTime(newStartTime)
	}

	const onEndChangeHandler = (newEnd) => {
		setEnd(newEnd)
	}

	const onEndTimeChangeHandler = (newEndTime) => {
		setEndTime(newEndTime)
	}

	const inputList = [
		{ type: 'text', name: 'title', label: 'タイトル', onChange: onTitleChangeHandler, value: title },
		{ type: 'text', name: 'address', label: '場所', onChange: onAddressChangeHandler, value: address },
		{ type: 'text', name: 'description', label: '詳細', onChange: onDescriptionChangeHandler, value: description },
		{ type: 'date', name: 'start', label: '開始日', onChange: onStartChangeHandler, value: start },
		{ type: 'time', name: 'startTime', label: '開始時間', onChange: onStartTimeChangeHandler, value: startTime },
		{ type: 'date', name: 'end', label: '終了日', onChange: onEndChangeHandler, value: end },
		{ type: 'time', name: 'endTime', label: '終了時間', onChange: onEndTimeChangeHandler, value: endTime },
	]

	return (
		<div className='div-form'>
			<form className='form vertical-center' onSubmit={onSubmitHandler}>

				{/* input section */}
				{
					inputList.map(({ type, name, label, onChange, value }) => (
						<Input disabled={disabled} key={name} type={type} name={name} label={label} onChange={onChange} value={value} />
					))
				}
				<br />

				{/* // loading section */}
				{
					loading && <Spinner />
				}

				{/* // message section */}
				{
					message.trim().length > 0 &&
					<MessageOut loading={loading} success={success} message={message} />
				}
				<br />

				{/* // button section */}
				{
					title.trim().length > 0 &&
					<Button type='submit' label='登録する' onClick={() => { }} />
				}
			</form>
		</div>
	)
}

export default DateForm
