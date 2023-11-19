import React from 'react'
import RoundButton from '../../RoundButton/RoundButton'
import RightArrow from '../../../../Icons/RightArrow'
import { RoundButtonPresetsProps } from '../types'

export default function RightArrowRoundButton({
	onClick,
	size
}: RoundButtonPresetsProps) {
	return <RoundButton icon={RightArrow} onClick={onClick} size={size} />
}
