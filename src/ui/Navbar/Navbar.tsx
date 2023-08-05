import React from 'react'
import { INavbarProps } from './types'
//@ts-ignore
import styles from './Navbar.module.scss'

export default function Navbar({ children }: INavbarProps) {
	return <div className={styles.Navbar}>{children}</div>
}
