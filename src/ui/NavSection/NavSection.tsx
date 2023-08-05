import React from 'react'
import { INavSectionProps } from './type'
//@ts-ignore
import styles from './NavSection.module.scss'

export default function NavSection({ children }: INavSectionProps) {
	return <div className={styles.NavSection}>{children}</div>
}
