import React from 'react'
import Typography from '../../../Typography/Typography'
//@ts-ignore
import styles from './NavbarButton.module.scss'
import { NavbarButtonProps } from './types'

export default function NavbarButton({
	text,
	icon,
	isActive,
	isHovered,
	color,
	weight,
	onClick
}: NavbarButtonProps) {
	return (
		<div
			className={
				isActive
					? styles.navbarButtonActive + ' ' + styles.navbarButton
					: styles.navbarButton
			}
			onClick={() => onClick()}
			aria-label={text}
		>
			<div className={styles.iconContainer}>{icon(isActive)}</div>
			{isHovered ? (
				<Typography weight={weight} color={color} text={text} />
			) : null}
		</div>
	)
}
