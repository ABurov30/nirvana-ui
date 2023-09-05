import React from 'react'
import Typography from '../Typography/Typography'
//@ts-ignore
import styles from './BlockButton.module.scss'
import { IBlockButtonProps } from './types'

export default function BlockButton({ text, srcImg }: IBlockButtonProps) {
	console.log('---------->')
	return (
		<div className={styles.BlockButton}>
			{srcImg ? <img src={srcImg} width={25} /> : null}
			<img src="/icons/mix.png" width={25} alt='что-то'/>
			<Typography text={text} color="#f3f3f3" />
		</div>
	)
}
