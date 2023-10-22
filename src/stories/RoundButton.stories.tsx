import type { Meta, StoryObj } from '@storybook/react'

import RoundButton from '../ui/Buttons/RoundButton/RoundButton'

const meta: Meta<typeof RoundButton> = {
	component: RoundButton
}

export default meta
type Story = StoryObj<typeof RoundButton>

export const Like: Story = {
	args: {
		srcImg: '/icons/heart.png'
	}
}

export const Share: Story = {
	args: {
		srcImg: '/icons/Share.png'
	}
}

export const LeftArrow: Story = {
	args: {
		srcImg: '/icons/leftArrow.png'
	}
}

export const DownArrow: Story = {
	args: {
		srcImg: '/icons/downArrow.png',
		color: 'transparent'
	}
}

export const RightArrow: Story = {
	args: {
		srcImg: '/icons/RightArrow.png'
	}
}

export const PlayButton: Story = {
	args: {
		srcImg: '/icons/play.png',
		color: '#F3F3F3'
	}
}

export const ReminderButton: Story = {
	args: {
		srcImg: '/icons/remind.png',
		color: 'transparent'
	}
}

export const RepeatButton: Story = {
	args: {
		srcImg: '/icons/repeat.png',
		color: 'transparent'
	}
}

export const MixButton: Story = {
	args: {
		srcImg: '/icons/mix.png',
		color: 'transparent'
	}
}

export const VolumeButton: Story = {
	args: {
		srcImg: '/icons/volume.png',
		color: 'transparent'
	}
}
