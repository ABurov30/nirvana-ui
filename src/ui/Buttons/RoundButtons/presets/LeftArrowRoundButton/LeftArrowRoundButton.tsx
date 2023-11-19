import React from 'react'
import RoundButton from '../../RoundButton/RoundButton'
import LeftArrow from '../../../../Icons/LeftArrow'
import { RoundButtonPresetsProps } from '../types'

export default function LeftArrowRoundButton({
	onClick,
	size
}: RoundButtonPresetsProps) {
	return <RoundButton icon={LeftArrow} onClick={onClick} size={size} />
}
