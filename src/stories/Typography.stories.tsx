import type { Meta, StoryObj } from '@storybook/react'

import Typography from '../ui/Typography/Typography'

const meta: Meta<typeof Typography> = {
	component: Typography
}

export default meta
type Story = StoryObj<typeof Typography>



export const Regular: Story = {
	args: {
		text: 'Typography',
	}
}

export const Medium: Story = {
	args: {
		text: 'Typography',
		weight: 'medium'
	}
}

export const SemiBold: Story = {
	args: {
        text: 'Typography',
		weight: 'semibold'
	}
}