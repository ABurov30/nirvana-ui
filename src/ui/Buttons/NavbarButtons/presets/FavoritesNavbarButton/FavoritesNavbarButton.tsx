import React from 'react'
import NavbarButton from '../../NavbarButton/NavbarButton'
import Like from '../../../../Icons/Like'
import { NavbarButtonPresetsProps } from '../types'

export default function FavoritesNavbarButton(props: NavbarButtonPresetsProps) {
	return <NavbarButton icon={Like} text={'Favotites'} {...props} />
}
