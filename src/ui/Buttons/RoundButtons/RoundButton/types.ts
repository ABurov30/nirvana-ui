import { ReactNode } from 'react'

export interface RoundButtonProps extends React.HTMLProps<HTMLButtonElement> {
	icon: ReactNode
	onClick?: () => void
	color?: string
	size?: number
	className?: string
	ariaLabel?: string
}
