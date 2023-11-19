import React from 'react'
import RoundButton from '../../RoundButton/RoundButton'
import Reminder from '../../../../Icons/Reminder'
import { RoundButtonPresetsProps } from '../types'

export default function ReminderRoundButton({ onClick, size }: RoundButtonPresetsProps) {
	return <RoundButton icon={Reminder} onClick={onClick} size={size} />
}
