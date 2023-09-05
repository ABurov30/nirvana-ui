import type { Meta, StoryObj } from '@storybook/react'

import MyButton from '../ui/MyButton/MyButton'

const meta: Meta<typeof MyButton> = {
	component: MyButton
}

export default meta
type Story = StoryObj<typeof MyButton>

export const Primary: Story = {
	args: {
		srcImg: '/icons/heart.png'
	}
}
