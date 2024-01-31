import type { Meta, StoryObj } from '@storybook/react'
import PromoTitle from '../ui/PromoTitle/PromoTitle'

const meta: Meta<typeof PromoTitle> = {
	component: PromoTitle
}

export default meta
type Story = StoryObj<typeof PromoTitle>

export const Primary: Story = {
	args: {
		prePhrase: 'Dive into',
		rotatedPhrases: ['emotions', 'feelings', 'pleasure', 'nirvana']
	}
}
