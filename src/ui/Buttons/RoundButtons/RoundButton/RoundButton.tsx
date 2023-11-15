//@ts-ignore
import styles from './RoundButton.module.scss'
import React from 'react'
import { IRoundButtonProps } from './types'

export default function RoundButton({ icon, color }: IRoundButtonProps) {
	return (
		<button className={styles.RoundButton} style={{ backgroundColor: color }}>
			<div className={styles.IconContainer}>{icon}</div>
		</button>
	)
}
