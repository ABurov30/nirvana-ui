import React from 'react'
import BlockButton from '../../BlockButton/BlockButton'
import Mix from '../../../../Icons/Mix'
import { MixBlokButtonProps } from './types'

export default function MixBlockButton({ onClick }: MixBlokButtonProps) {
	return <BlockButton text={'Mix'} icon={Mix} onClick={onClick} />
}
