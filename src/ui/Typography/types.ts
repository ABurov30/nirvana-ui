export interface ITypographyProps extends Partial<HTMLSpanElement> {
	text: React.ReactNode
	fontSize?: string
	weight?: 'semibold' | 'regular' | 'medium'
	color?: string
	textAlign?: 'left' | 'right' | 'center' | 'justify'
}
