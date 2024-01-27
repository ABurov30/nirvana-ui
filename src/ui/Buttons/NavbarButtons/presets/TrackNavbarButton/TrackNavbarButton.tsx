import React from 'react'
import Note from '../../../../Icons/Note'
import NavbarButton from '../../NavbarButton/NavbarButton'
import { NavbarButtonPresetsProps } from '../types'

export default function TrackNavbarButton(props: NavbarButtonPresetsProps) {
	return <NavbarButton icon={Note} text={'Songs'} {...props} />
}
