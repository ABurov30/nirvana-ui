import React from 'react'
import Typography from '../../Typography/Typography'
//@ts-ignore
import styles from './NavbarButton.module.scss'
import { INabvarButtonProps } from './types'

export default function NavbarButton({ children, srcImg, srcActiveImg, isActive }: INabvarButtonProps) {
	return (
		<div
			className={
				isActive ? styles.NavbarButtonActive : styles.NavbarButton
			}
		>
			{isActive ? (
				<img src={srcActiveImg} width={25} />
			) : (
				<img src={srcImg} width={25} />
			)}
			<Typography text={children} color="#2A2630" />
		</div>
	)
}
