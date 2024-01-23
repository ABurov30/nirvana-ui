import { ButtonHTMLAttributes, ReactNode } from 'react'

export interface IBlockButtonProps
	extends Pick<
		ButtonHTMLAttributes<HTMLButtonElement>,
		Exclude<keyof ButtonHTMLAttributes<HTMLButtonElement>, 'type'>
	> {
	text: string
	type: never
	icon?: ReactNode
	onClick?: () => void
}
