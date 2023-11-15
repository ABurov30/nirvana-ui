import React from 'react'
import RoundButton from '../RoundButton/RoundButton'
import Play from '../../../Icons/Play'
import { IconRoundButtonProps } from '../types'

export default function PlayRoundButton({ onClick }: IconRoundButtonProps) {
	return <RoundButton icon={Play} onClick={onClick} />
}
