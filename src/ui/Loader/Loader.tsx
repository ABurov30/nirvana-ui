//@ts-ignore
import styles from './Loader.module.scss'
import React from 'react'

export default function Loader(): JSX.Element {
	return (
		<div className={styles.loaderContainer}>
			<div className={styles.loader} id={'loader'}>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
			</div>
		</div>
	)
}
