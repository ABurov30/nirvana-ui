import React from 'react'
//@ts-ignore
import style from './Typography.module.scss'
import { ITypographyProps } from './types'

export default function Typography({
	text,
	fontSize,
	weight,
	color
}: ITypographyProps) {
	const fontWeight = (() => {
		switch (weight?.toLowerCase()) {
			case 'regular':
				return 400
			case 'medium':
				return 500
			case 'semibold':
				return 600
			default:
				return 400
		}
	})()

	return (
		<span
			className={style.typography}
			style={{
				fontWeight,
				fontSize,
				color
			}}
		>
			{text}
		</span>
	)
}
