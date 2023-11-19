import Home from '../../../../Icons/Home'
import React from 'react'
import NavbarButton from '../../NavbarButton/NavbarButton'
import { NavbarButtonPresetsProps } from '../types'

export default function HomeNavbarButton(props: NavbarButtonPresetsProps) {
	return <NavbarButton icon={Home} text={'Home'} {...props} />
}
