import { ReactNode } from 'react'

export interface IRoundButtonProps extends React.HTMLProps<HTMLButtonElement> {
	icon: ReactNode
	onClick: () => void
	color?: string
	size?: number
}
