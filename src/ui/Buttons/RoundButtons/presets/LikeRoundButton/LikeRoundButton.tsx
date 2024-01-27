import React from 'react'
import Like from '../../../../Icons/presets/Like'
import RoundButton from '../../RoundButton/RoundButton'
import { RoundButtonPresetsProps } from '../types'

export default function LikeRoundButton({
	onClick,
	size
}: RoundButtonPresetsProps) {
	return (
		<RoundButton
			icon={Like(false, { stroke: '#F3F3F3' })}
			onClick={onClick}
			size={size}
			ariaLabel={'Like'}
		/>
	)
}
