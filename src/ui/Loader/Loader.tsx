//@ts-ignore
import styles from './style.module.scss'
import React from 'react'

export default function Loader(): JSX.Element {
	return (
		<div className={styles.loaderContainer}>
			<div className={styles.loader}>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
			</div>
		</div>
	)
}
