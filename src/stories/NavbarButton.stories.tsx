import type { Meta, StoryObj } from '@storybook/react'

import NavbarButton from '../ui/Buttons/NavbarButton/NavbarButton'

const meta: Meta<typeof NavbarButton> = {
	component: NavbarButton,
	decorators: [
		Story => (
			<div style={{ width: '120px' }}>
				<Story />
			</div>
		)
	]
}

export default meta
type Story = StoryObj<typeof NavbarButton>

export const Primary: Story = {
	args: {
		children: 'Home',
		srcImg: '/icons/home.png',
		srcActiveImg: '/icons/homeActive.png'
	}
}

export const Active: Story = {
	args: {
		children: 'Home',
		srcImg: '/icons/home.png',
		srcActiveImg: '/icons/homeActive.png',
		isActive: true
	}
}
