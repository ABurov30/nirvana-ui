import React from 'react'
//@ts-ignore
import style from './Typography.module.scss'
import { ITypographyProps } from './types'

export default function Typography({
	text,
	fontSize,
	weight,
	color,
	textAlign
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
				textAlign: textAlign,
				fontSize: fontSize,
				color
			}}
		>
			{text}
		</span>
	)
}
