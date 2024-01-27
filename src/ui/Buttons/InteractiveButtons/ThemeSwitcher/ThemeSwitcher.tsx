import React from 'react'

import styles from './ThemeSwitcher.module.scss'
import { ThemeSwitcherProps } from './types'

export default function ThemeSwitcher({
	theme,
	changeTheme,
	checked
}: ThemeSwitcherProps) {
	return (
		<label className={styles.switch}>
			<input
				className={styles.input}
				type={'checkbox'}
				checked={checked}
				onChange={() =>
					changeTheme(theme === 'light' ? 'dark' : 'light')
				}
			></input>
			<span className={styles.slider}></span>
		</label>
	)
}
