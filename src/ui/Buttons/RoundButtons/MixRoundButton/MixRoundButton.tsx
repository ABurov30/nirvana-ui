import React from 'react'
import RoundButton from '../RoundButton/RoundButton'
import Mix from '../../../Icons/Mix'
import { IconRoundButtonProps } from '../types'

export default function MixRoundButton({
	onClick,
	size
}: IconRoundButtonProps) {
	return <RoundButton icon={Mix} onClick={onClick} size={size} />
}
