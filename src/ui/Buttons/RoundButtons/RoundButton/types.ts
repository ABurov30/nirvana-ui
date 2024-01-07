import { ReactNode } from 'react'

export interface RoundButtonProps {
	icon: ReactNode
	onClick?: () => void
	color?: string
	size?: string
	className?: string
	ariaLabel?: string
}
