import { ReactNode } from 'react'

export interface IRoundButtonProps {
	icon: ReactNode
	color?: string
	onClick: () => void
	size: number
}
