import React from 'react'
import RoundButton from '../RoundButton/RoundButton'
import LeftArrow from '../../../Icons/LeftArrow'
import { IconRoundButtonProps } from '../types'

export default function LeftArrowRoundButton({
	onClick,
	size
}: IconRoundButtonProps) {
	return <RoundButton icon={LeftArrow} onClick={onClick} size={size} />
}
