import React from 'react'
import RoundButton from '../RoundButton/RoundButton'
import Share from '../../../Icons/Share'

export default function ShareRoundButton({ onClick }): IconRoundButttonProps {
	return <RoundButton icon={Share} onClick={onClick} />
}
