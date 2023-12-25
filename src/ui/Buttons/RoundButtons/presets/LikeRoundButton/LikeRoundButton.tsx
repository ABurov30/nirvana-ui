import React from 'react'
import RoundButton from '../../RoundButton/RoundButton'
import Like from '../../../../Icons/Like'
import { RoundButtonPresetsProps } from '../types'

export default function LikeRoundButton({ onClick, size }: RoundButtonPresetsProps) {
	return (
		<RoundButton
			icon={Like({ stroke: '#F3F3F3' })}
			onClick={onClick}
			size={size}
		/>
	)
}
