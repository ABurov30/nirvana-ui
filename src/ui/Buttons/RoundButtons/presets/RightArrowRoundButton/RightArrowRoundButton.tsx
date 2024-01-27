import React from 'react'
import RightArrow from '../../../../Icons/RightArrow'
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
