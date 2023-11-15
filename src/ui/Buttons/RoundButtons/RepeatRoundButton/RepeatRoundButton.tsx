import React from 'react'
import RoundButton from '../RoundButton/RoundButton'
import Repeat from '../../../Icons/Repeat'
import { IconRoundButtonProps } from '../types'

export default function RepeatRoundButton({ onClick }: IconRoundButtonProps) {
	return <RoundButton icon={Repeat} onClick={onClick}/>
}
