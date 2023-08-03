import React from 'react'
//@ts-ignore
import style from './MyButton.module.scss'

export interface MyButtonProps {
	color: string
	big: boolean
	children: React.ReactNode
}

export default function MyButton({
	color,
	children,
	...props
}: MyButtonProps): JSX.Element {
	return (
		<button className={style.myButton} {...props} style={{ color }}>
			{children}
		</button>
	)
}
