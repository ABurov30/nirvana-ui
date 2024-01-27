import React from 'react'
import Mix from '../../../../Icons/Mix'
import RoundButton from '../../RoundButton/RoundButton'
import { RoundButtonPresetsProps } from '../types'

export default function MixRoundButton({
	onClick,
	size,
	className
}: RoundButtonPresetsProps) {
	return (
		<RoundButton
			icon={Mix}
			onClick={onClick}
			size={size}
			className={className}
			ariaLabel={'Mix'}
		/>
	)
}
