import React from 'react'
import RoundButton from '../../RoundButton/RoundButton'
import Mix from '../../../../Icons/Mix'
import { RoundButtonPresetsProps } from '../types'

export default function MixRoundButton({ onClick, size, className }: RoundButtonPresetsProps) {
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
