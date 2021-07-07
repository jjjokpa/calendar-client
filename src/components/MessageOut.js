import React from 'react'
import './MessageOut.css'

const MessageOut = ({
	success,
	message
}) => {
	return (
		<div>
			<h3 className={success ? 'message-good' : 'message-fail'}>
				{message}
			</h3>
		</div>
	)
}

export default MessageOut
