import React from 'react'
import Play from '../../../../Icons/Play'
import BlockButton from '../../BlockButton/BlockButton'
import { PlayBlokButtonProps } from './types'

export default function PlayBlockButton({
	onClick,
	text
}: PlayBlokButtonProps) {
	return <BlockButton text={text} icon={Play} onClick={onClick} />
}
