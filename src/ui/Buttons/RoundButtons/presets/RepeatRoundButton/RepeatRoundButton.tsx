import React from 'react'
import Repeat from '../../../../Icons/Repeat'
import RoundButton from '../../RoundButton/RoundButton'
import { RoundButtonPresetsProps } from '../types'

export default function RepeatRoundButton({
	onClick,
	size
}: RoundButtonPresetsProps) {
	return (
		<RoundButton
			icon={Repeat}
			onClick={onClick}
			size={size}
			ariaLabel={'Repeat'}
		/>
	)
}
