import React from 'react'
import Typography from '../../Typography/Typography'
//@ts-ignore
import styles from './BlockButton.module.scss'
import { IBlockButtonProps } from './types'

export default function BlockButton({ text, srcImg }: IBlockButtonProps) {
	return (
		<div className={styles.BlockButton}>
			{srcImg ? <img src={srcImg} width={25} /> : null}
			<Typography text={text} color="#f3f3f3" />
		</div>
	)
}
