import React from 'react'
import RoundButton from '../RoundButton/RoundButton'
import Like from '../../../Icons/Like'
import { IconRoundButtonProps } from '../types'

export default function LikeRoundButton({onClick}:IconRoundButtonProps) {
	return <RoundButton icon={Like} onClick={onClick}/>
}
