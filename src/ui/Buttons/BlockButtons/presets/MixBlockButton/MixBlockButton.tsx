import React from 'react'
import Mix from '../../../../Icons/Mix'
import BlockButton from '../../BlockButton/BlockButton'
import { MixBlokButtonProps } from './types'

export default function MixBlockButton({ onClick }: MixBlokButtonProps) {
	return <BlockButton text={'Mix'} icon={Mix} onClick={onClick} />
}
