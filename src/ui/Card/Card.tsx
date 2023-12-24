import React from 'react'
import Typography from '../Typography/Typography'
import { ICardProps } from './types'
//@ts-ignore
import style from './Card.module.scss'

export default function Card({
	srcImg,
	title,
	artist,
	imgSize,
	onClick
}: ICardProps) {
	return (
		<div className={style.card} onClick={onClick}>
			<div
				className={style.imgContainer}
				style={{
					width: `${imgSize ? imgSize : 100}px`,
					height: `${imgSize ? imgSize : 100}px`
				}}
			>
				<img
					alt="Музыкальная обложка"
					src={srcImg}
					height={`${imgSize ? imgSize : 100}px`}
					width={`${imgSize ? imgSize : 100}px`}
				/>
			</div>
			{/* </div> */}
			{title ? (
				<Typography text={title} fontSize="16" weight="semibold" />
			) : null}
			{artist ? (
				<Typography text={artist} fontSize="14" weight="regular" />
			) : null}
		</div>
	)
}
