import React from 'react'
import Typography from '../../../Typography/Typography'
//@ts-ignore
import styles from './NavbarButton.module.scss'
import { INabvarButtonProps } from './types'

export default function NavbarButton({
	text,
	icon,
	isActive,
	isHovered
}: INabvarButtonProps) {
	return (
		<div
			className={
				isActive
					? styles.navbarButtonActive + ' ' + styles.navbarButton
					: styles.navbarButton
			}
		>
			<div className={styles.iconContainer}>{icon}</div>
			{isHovered ? <Typography text={text} /> : null}
			<Typography text={text} />
		</div>
	)
}
