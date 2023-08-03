import type { Meta, StoryObj } from '@storybook/react'

import RoundButton from '../ui/RoundButton/RoundButton'

const meta: Meta<typeof RoundButton> = {
	component: RoundButton
}

export default meta
type Story = StoryObj<typeof RoundButton>

export const Like: Story = {
	args: {
		srcImg: '/heart.png'
	}
}

export const Share: Story = {
	args: {
		srcImg: '/Share.png'
	}
}

export const LeftArrow: Story = {
	args: {
		srcImg: '/leftArrow.png'
	}
}

export const DownArrow: Story = {
	args: {
		srcImg: '/downArrow.png',
		color: 'transparent'
	}
}

export const RightArrow: Story = {
	args: {
		srcImg: '/RightArrow.png'
	}
}

export const PlayButton: Story = {
	args: {
		srcImg: '/play.png',
		color: '#F3F3F3'
	}
}

export const ReminderButton: Story = {
	args: {
		srcImg: '/remind.png',
		color: 'transparent'
	}
}

export const RepeatButton: Story = {
	args: {
		srcImg: '/repeat.png',
		color: 'transparent'
	}
}

export const MixButton: Story = {
	args: {
		srcImg: '/mix.png',
		color: 'transparent'
	}
}

export const VolumeButton: Story = {
	args: {
		srcImg: '/volume.png',
		color: 'transparent'
	}
}





