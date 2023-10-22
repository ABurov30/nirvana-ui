import type { Meta, StoryObj } from '@storybook/react'

import VolumeSlider from '../../ui/Sliders/VolumeSlider/VolumeSlider'

const meta: Meta<typeof VolumeSlider> = {
	component: VolumeSlider
}

export default meta
type Story = StoryObj<typeof VolumeSlider>

export const Main: Story = {}
