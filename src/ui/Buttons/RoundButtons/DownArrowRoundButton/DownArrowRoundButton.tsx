import React from 'react'
import RoundButton from '../RoundButton/RoundButton'
import DownArrow from '../../../Icons/DownArrow'
import { IconRoundButtonProps } from '../types'

export default function DownArrowRoundButton({onClick}:IconRoundButtonProps) {
	return <RoundButton icon={DownArrow}  onClick={onClick}/>
}
