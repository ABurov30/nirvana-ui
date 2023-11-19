import React from 'react'
import NavbarButton from '../../NavbarButton/NavbarButton'
import Logo from '../../../../Icons/Logo'
import { NavbarButtonPresetsProps } from '../types'

function LogoNavbarButton(props: NavbarButtonPresetsProps) {
	return (
		<NavbarButton
			icon={Logo}
			text={'NIRVANA'}
			color="#6360FF"
			weight="semibold"
			{...props}
		/>
	)
}

export default LogoNavbarButton
