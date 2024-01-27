import React from 'react'
import Like from '../../../../Icons/presets/Like'
import NavbarButton from '../../NavbarButton/NavbarButton'
import { NavbarButtonPresetsProps } from '../types'

export default function FavoritesNavbarButton(props: NavbarButtonPresetsProps) {
	return <NavbarButton icon={Like} text={'Favotites'} {...props} />
}
