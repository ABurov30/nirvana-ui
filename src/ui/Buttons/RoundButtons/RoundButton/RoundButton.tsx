//@ts-ignore
import styles from './RoundButton.module.scss'
import React from 'react'
import { RoundButtonProps } from './types'

export default function RoundButton({
	icon,
	color,
	onClick,
	size,
	className,
	ariaLabel
}: RoundButtonProps) {
	return (
		<button
			className={
				className
					? styles.RoundButton + ' ' + className
					: styles.RoundButton
			}
			style={{ backgroundColor: color, width: size, height: size }}
			onClick={onClick}
			aria-label={ariaLabel}
		>
			<div className={styles.IconContainer}>{icon}</div>
		</button>
	)
}
