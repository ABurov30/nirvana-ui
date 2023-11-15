import React from 'react'
import RoundButton from '../RoundButton/RoundButton'
import Repeat from '../../../Icons/Repeat'
import { IconRoundButtonProps } from '../types'

export default function RepeatRoundButton({
	onClick,
	size
}: IconRoundButtonProps) {
	return <RoundButton icon={Repeat} onClick={onClick} size={size} />
}
