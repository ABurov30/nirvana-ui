import React from 'react'
import Play from '../../../../Icons/Play'
import BlockButton from '../../BlockButton/BlockButton'
import { PlayBlokButtonProps } from './types'

export default function PlayBlockButton({ onClick }: PlayBlokButtonProps) {
	return <BlockButton text={'Play All'} icon={Play} onClick={onClick} />
}
