import React from 'react'
import { IconProps } from './types'

function Icon({ path }: IconProps) {
	return <img src={path}></img>
}

export default Icon
