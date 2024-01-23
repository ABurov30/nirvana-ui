import { ButtonHTMLAttributes, ReactNode } from 'react'


export interface IBlockButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	text: string
	icon?: ReactNode
	onClick?: () => void
}
