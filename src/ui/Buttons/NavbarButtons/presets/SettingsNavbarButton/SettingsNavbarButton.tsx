import React from 'react'
import NavbarButton from '../../NavbarButton/NavbarButton'
import Setting from '../../../../Icons/Setting'
import { NavbarButtonPresetsProps } from '../types'

export default function SettingsNavbarButton(props: NavbarButtonPresetsProps) {
	return <NavbarButton icon={Setting} text={'Settings'} {...props} />
}
