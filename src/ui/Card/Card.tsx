import React from 'react'
import Typography from '../Typography/Typography'
import { ICardProps } from './types'
//@ts-ignore
import style from './Card.module.scss'

export default function Card({ srcImg, title, subTitle, onClick }: ICardProps) {
	return (
		<div className={style.card} onClick={onClick}>
			<img
				alt="Музыкальная обложка"
				src={srcImg}
				height={'100px'}
				width={'100px'}
			/>
			{title ? (
				<Typography
					text={
						title.length > 10 ? `${title.slice(0, 10)}...` : title
					}
					fontSize="16"
					weight="semibold"
				/>
			) : null}
			{subTitle ? (
				<Typography
					text={
						subTitle.length > 10
							? `${subTitle.slice(0, 10)}...`
							: subTitle
					}
					fontSize="14"
					weight="regular"
				/>
			) : null}
		</div>
	)
}
