import React from 'react'
import RoundButton from '../../RoundButton/RoundButton'
import Play from '../../../../Icons/Play'
import { RoundButtonPresetsProps } from '../types'

export default function PlayRoundButton({ onClick, size }: RoundButtonPresetsProps) {
	return <RoundButton icon={Play} onClick={onClick} size={size} />
}
