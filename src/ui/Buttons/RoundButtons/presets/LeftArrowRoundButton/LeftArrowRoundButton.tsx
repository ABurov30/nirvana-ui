import React from 'react'
import LeftArrow from '../../../../Icons/presets/LeftArrow'
import RoundButton from '../../RoundButton/RoundButton'
import { RoundButtonPresetsProps } from '../types'

export default function LeftArrowRoundButton({
	onClick,
	size
}: RoundButtonPresetsProps) {
	return (
		<RoundButton
			icon={LeftArrow}
			onClick={onClick}
			size={size}
			ariaLabel={'Previous'}
		/>
	)
}
