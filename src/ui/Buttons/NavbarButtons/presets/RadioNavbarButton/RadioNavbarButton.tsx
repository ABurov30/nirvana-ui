import React from 'react'
import Radio from '../../../../Icons/Radio'
import NavbarButton from '../../NavbarButton/NavbarButton'
import { NavbarButtonPresetsProps } from '../types'

export default function RadioNavbarButton(props: NavbarButtonPresetsProps) {
	return <NavbarButton icon={Radio} text={'Radio'} {...props} />
}
