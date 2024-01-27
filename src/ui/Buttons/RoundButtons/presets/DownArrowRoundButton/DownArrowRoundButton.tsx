import React from 'react'
import DownArrow from '../../../../Icons/presets/DownArrow'
import RoundButton from '../../RoundButton/RoundButton'
import { RoundButtonPresetsProps } from '../types'

export default function DownArrowRoundButton({
	onClick,
	size
}: RoundButtonPresetsProps) {
	return (
		<RoundButton
			icon={DownArrow}
			onClick={onClick}
			size={size}
			ariaLabel={'Down'}
		/>
	)
}
