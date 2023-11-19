import React from 'react'
import NavbarButton from '../../NavbarButton/NavbarButton'
import Radio from '../../../../Icons/Radio'
import { NavbarButtonPresetsProps } from '../types'

export default function RadioNavbarButton(props: NavbarButtonPresetsProps) {
	return <NavbarButton icon={Radio} text={'Radio'} {...props} />
}
