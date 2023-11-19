import React from 'react'
import RoundButton from '../../RoundButton/RoundButton'
import Like from '../../../../Icons/Like'
import { RoundButtonPresetsProps } from '../types'

export default function LikeRoundButton({ onClick, size }: RoundButtonPresetsProps) {
	return <RoundButton icon={Like()} onClick={onClick} size={size} />
}
