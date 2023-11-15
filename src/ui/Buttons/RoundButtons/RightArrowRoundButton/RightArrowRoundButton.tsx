import React from 'react'
import RoundButton from '../RoundButton/RoundButton'
import RightArrow from '../../../Icons/RightArrow'
import { IconRoundButtonProps } from '../types'

export default function RightArrowRoundButton({
	onClick,
	size
}: IconRoundButtonProps) {
	return <RoundButton icon={RightArrow} onClick={onClick} size={size} />
}
