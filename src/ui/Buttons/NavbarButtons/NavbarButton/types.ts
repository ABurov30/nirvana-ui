import { ReactNode } from 'react'

export interface NavbarButtonProps extends React.HTMLProps<HTMLButtonElement> {
	text?: string
	icon?: any
	isActive?: boolean
	isHovered?: boolean
	onClick: () => void
	color?: string
	weight?: 'semibold' | 'regular' | 'medium'
}
