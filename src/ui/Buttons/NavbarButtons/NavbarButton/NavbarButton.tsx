import React from 'react'
import Typography from '../../../Typography/Typography'
//@ts-ignore
import styles from './NavbarButton.module.scss'
import { INabvarButtonProps } from './types'

export default function NavbarButton({
	text,
	icon,
	isActive
}: INabvarButtonProps) {
	return (
		<div
			className={
				isActive ? styles.NavbarButtonActive : styles.NavbarButton
			}
		>
			<div className={styles.IconContainer}>{icon}</div>
			<Typography text={text} color="#2A2630" />
		</div>
	)
}
