import React from 'react'
import RoundButton from '../../RoundButton/RoundButton'
import DownArrow from '../../../../Icons/DownArrow'
import { RoundButtonPresetsProps } from '../types'

export default function DownArrowRoundButton({ onClick, size }: RoundButtonPresetsProps) {
	return <RoundButton icon={DownArrow} onClick={onClick} size={size} />
}
