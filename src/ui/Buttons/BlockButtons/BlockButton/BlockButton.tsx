import React from 'react'
import Typography from '../../../Typography/Typography'
//@ts-ignore
import styles from './BlockButton.module.scss'
import { IBlockButtonProps } from './types'

export default function BlockButton({
	text,
	icon,
	...rest
}: IBlockButtonProps) {
	return (
		<button {...rest} className={styles.BlockButton}>
			{icon && <div className={styles.IconContainer}>{icon}</div>}
			<Typography text={text} color="#f3f3f3" />
		</button>
	)
}
