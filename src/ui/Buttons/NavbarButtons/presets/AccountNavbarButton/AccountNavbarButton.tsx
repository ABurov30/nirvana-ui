import React from 'react'
import NavbarButton from '../../NavbarButton/NavbarButton'
import Like from '../../../../Icons/Like'
import User from '../../../../Icons/User'
import { NavbarButtonPresetsProps } from '../types'

export default function AccountNavbarButton(props: NavbarButtonPresetsProps) {
	return (
		<NavbarButton
			icon={User}
			text={'Account'}
			{...props}
		/>
	)
}
