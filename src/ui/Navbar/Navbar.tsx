import React, { useState } from 'react'
import { INavbarProps } from './types'
//@ts-ignore
import styles from './Navbar.module.scss'

function Navbar({ children, isHovered, setIsHovered }: INavbarProps) {
	const childrenWithProps = React.Children.map(children, child => {
		if (React.isValidElement(child)) {
			return React.cloneElement(child, { isHovered } as React.Attributes)
		}
		return child
	})

	return (
		<div
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			className={
				isHovered
					? styles.navbarHovered + ' ' + styles.navbar
					: styles.navbar
			}
		>
			{childrenWithProps}
		</div>
	)
}

export default Navbar
