//@ts-ignore
import styles from './RoundButton.module.scss'
import React from 'react'
import { IRoundButtonProps } from './types'

export default function RoundButton({ srcImg, color }: IRoundButtonProps) {
	return (
		<div className={styles.RoundButton} style={{ backgroundColor: color }}>
			{srcImg ? <img src={srcImg} height={25} width={25} /> : null}
		</div>
	)
}
