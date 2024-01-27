import React from 'react'
import Reminder from '../../../../Icons/Reminder'
import RoundButton from '../../RoundButton/RoundButton'
import { RoundButtonPresetsProps } from '../types'

export default function ReminderRoundButton({
	onClick,
	size
}: RoundButtonPresetsProps) {
	return (
		<RoundButton
			icon={Reminder}
			onClick={onClick}
			size={size}
			ariaLabel={'Reminder'}
		/>
	)
}
