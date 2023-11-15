import React from 'react'
import RoundButton from '../RoundButton/RoundButton'
import Share from '../../../Icons/Share'
import { IconRoundButtonProps } from '../types'

export default function ShareRoundButton({
	onClick,
	size
}: IconRoundButtonProps) {
	return <RoundButton icon={Share} onClick={onClick} size={size} />
}
