import React from 'react'
import './MessageOut.css'

import Spinner from './Spinner'

const MessageOut = ({
	success,
	message,
	loading
}) => {
	return (
		<div>
			{
				loading && <Spinner /> 
			}
			<h3 className={success ? 'message-good' : 'message-fail'}>
				{message}
			</h3>
		</div>
	)
}

export default MessageOut
