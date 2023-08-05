import type { Meta, StoryObj } from '@storybook/react'

import BlockButton from '../ui/BlockButton/BlockButton'

const meta: Meta<typeof BlockButton> = {
	component: BlockButton
}

export default meta
type Story = StoryObj<typeof BlockButton>

export const PlayAll: Story = {
	args: {
        text: 'Play All', 
		srcImg: '/play.png'
	}
}

export const Mix: Story = {
	args: {
		text: 'Mix',
		srcImg: '/mix.png'
	}
}