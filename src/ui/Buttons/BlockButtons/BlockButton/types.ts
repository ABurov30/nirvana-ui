import { ButtonHTMLAttributes, ReactNode } from 'react'

type ButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'form'>

export interface IBlockButtonProps extends ButtonProps {
	text: string
	icon?: ReactNode
}
