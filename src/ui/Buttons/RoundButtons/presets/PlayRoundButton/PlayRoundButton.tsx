import React from 'react'
import Play from '../../../../Icons/Play'
import RoundButton from '../../RoundButton/RoundButton'
import { RoundButtonPresetsProps } from '../types'

export default function PlayRoundButton({
	onClick,
	size
}: RoundButtonPresetsProps) {
	return (
		<RoundButton
			icon={Play}
			onClick={onClick}
			size={size}
			ariaLabel={'Play'}
		/>
	)
}
