import React from 'react'
import RoundButton from '../../RoundButton/RoundButton'
import Share from '../../../../Icons/Share'
import { RoundButtonPresetsProps } from '../types'

export default function ShareRoundButton({
	onClick,
	size
}: RoundButtonPresetsProps) {
	return <RoundButton icon={Share} onClick={onClick} size={size} />
}
