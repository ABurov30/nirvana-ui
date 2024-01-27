import React from 'react'
import Setting from '../../../../Icons/Setting'
import NavbarButton from '../../NavbarButton/NavbarButton'
import { NavbarButtonPresetsProps } from '../types'

export default function SettingsNavbarButton(props: NavbarButtonPresetsProps) {
	return <NavbarButton icon={Setting} text={'Settings'} {...props} />
}
