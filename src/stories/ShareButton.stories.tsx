import type { Meta, StoryObj } from '@storybook/react'
import ShareButton from '../ui/Buttons/ShareButton/ShareButton'
import Share from '../ui/Icons/Share'

const meta: Meta<typeof ShareButton> = {
	component: ShareButton
}

export default meta
type Story = StoryObj<typeof ShareButton>

export const ShareBtn: Story = {
	args: {
		icon: Share
	}
}
