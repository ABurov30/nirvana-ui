import React from 'react'
import Typography from '../Typography/Typography'
import { ICardProps } from './types'
//@ts-ignore
import style from './Card.module.scss'

export default function Card({ srcImg, title, subTitle, onClick }: ICardProps) {
	return (
		<div className={style.card} onClick={onClick}>
			<div
				className={style.imgContainer}
				style={{
					width: `100px`,
					height: `100px`
				}}
			>
				<img
					alt="Музыкальная обложка"
					src={srcImg}
					height={'100px'}
					width={'100px'}
				/>
			</div>
			{title ? (
				<Typography text={title} fontSize="16" weight="semibold" />
			) : null}
			{subTitle ? (
				<Typography text={subTitle} fontSize="14" weight="regular" />
			) : null}
		</div>
	)
}
