import React from 'react'
import { PromoTitleProps } from './types'

import styles from './PromoTitle.module.scss'

export default function PromoTitle({
	prePhrase,
	rotatedPhrases
}: PromoTitleProps) {
	return (
		<div className={styles.container}>
			<p className={styles.contentContainerText}>{prePhrase}</p>

			<ul className={styles.contentContainerList}>
				{rotatedPhrases.map(phrase => (
					<li
						className={styles.contentContainerListItem}
						key={phrase}
					>
						{phrase}
					</li>
				))}
			</ul>
		</div>
	)
}
