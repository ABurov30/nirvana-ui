import React from 'react'
import Share from '../../../../Icons/Share'
import RoundButton from '../../RoundButton/RoundButton'
import { RoundButtonPresetsProps } from '../types'

export default function ShareRoundButton({
	onClick,
	size
}: RoundButtonPresetsProps) {
	return (
		<RoundButton
			icon={Share}
			onClick={onClick}
			size={size}
			ariaLabel={'Share'}
		/>
	)
}
