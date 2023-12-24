import React from 'react'
import NavbarButton from '../../NavbarButton/NavbarButton'
import { NavbarButtonPresetsProps } from '../types'
import Note from '../../../../Icons/Note'

export default function TrackNavbarButton(props: NavbarButtonPresetsProps) {
	return <NavbarButton icon={Note} text={'Songs'} {...props} />
}
