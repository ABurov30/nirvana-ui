import React from 'react'
//@ts-ignore
import styles from './ThemeSlider.module.scss'

export default function ThemeSlider() {
	return (
		<label className={styles.switch}>
			<input type={'checkbox'}></input>
			<span className={styles.slider}></span>
		</label>
	)
}
