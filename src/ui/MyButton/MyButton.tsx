import React from 'react'
//@ts-ignore
import style from './MyButton.module.scss'

export interface MyButtonProps {
	srcImg: string
	color: string
	big: boolean
	children: React.ReactNode
}

export default function MyButton({
	srcImg,
	color,
	children,
	...props
}: MyButtonProps): JSX.Element {
	return (
		<button className={style.myButton} {...props} style={{ color }}>
			{srcImg ? <img src={srcImg}/> : null}
			{children}
		</button>
	)
}
