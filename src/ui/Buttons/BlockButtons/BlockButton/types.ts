import { ButtonHTMLAttributes, ReactNode } from 'react'


export interface IBlockButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	text: string
	type?: 'submit' | 'reset' | 'button' | undefined
	icon?: ReactNode
	onClick?: () => void
}
