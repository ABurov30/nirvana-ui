import { ButtonHTMLAttributes, ReactNode } from 'react'

export interface IBlockButtonProps
	extends Pick<
		ButtonHTMLAttributes<HTMLButtonElement>,
		Exclude<keyof ButtonHTMLAttributes<HTMLButtonElement>, 'type'>
	> {
	text: string
	type: string
	icon?: ReactNode
	onClick?: () => void
}
