import React from 'react'
import RoundButton from '../RoundButton/RoundButton'
import Reminder from '../../../Icons/Reminder'
import { IconRoundButtonProps } from '../types'

export default function ReminderRoundButton({
	onClick,
	size
}: IconRoundButtonProps) {
	return <RoundButton icon={Reminder} onClick={onClick} size={size} />
}
