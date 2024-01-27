import React from 'react'
import RightArrow from '../../../../Icons/presets/RightArrow'
import RoundButton from '../../RoundButton/RoundButton'
import { RoundButtonPresetsProps } from '../types'

export default function RightArrowRoundButton({
	onClick,
	size
}: RoundButtonPresetsProps) {
	return (
		<RoundButton
			icon={RightArrow}
			onClick={onClick}
			size={size}
			ariaLabel={'Next'}
		/>
	)
}
