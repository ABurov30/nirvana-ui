import type { Meta, StoryObj } from '@storybook/react'

import NavbarButton from '../ui/NavbarButton/NavbarButton'

const meta: Meta<typeof NavbarButton> = {
  component: NavbarButton,
  decorators: [(Story) => <div style={{width: '120px'}}><Story /></div>],
};

export default meta
type Story = StoryObj<typeof NavbarButton>

export const Primary: Story = {
	args: {
		children: 'Home',
		srcImg: '/home.png',
		srcActiveImg: '/homeActive.png'
	}
}

export const Active: Story = {
	args: {
		children: 'Home',
		srcImg: '/home.png',
		srcActiveImg: '/homeActive.png',
		isActive: true
	}
}
