import React from 'react'
import User from '../../../../Icons/presets/User'
import NavbarButton from '../../NavbarButton/NavbarButton'
import { NavbarButtonPresetsProps } from '../types'

export default function AccountNavbarButton(props: NavbarButtonPresetsProps) {
	return <NavbarButton icon={User} text={'Account'} {...props} />
}
