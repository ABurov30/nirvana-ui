import React from 'react'
import { NavSectionProps } from './type'
//@ts-ignore
import styles from './NavSection.module.scss'

export default function NavSection({ children, isHovered }: NavSectionProps) {
	const childrenWithProps = React.Children.map(children, child => {
		if (React.isValidElement(child)) {
			return React.cloneElement(child, { isHovered } as React.Attributes)
		}
		return child
	})
	return <div className={styles.NavSection}>{childrenWithProps}</div>
}
