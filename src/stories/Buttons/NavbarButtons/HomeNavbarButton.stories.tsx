import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import HomeNavbarButton from '../../../ui/Buttons/NavbarButtons/presets/HomeNavbarButton/HomeNavbarButton'

const meta: Meta<typeof HomeNavbarButton> = {
	component: HomeNavbarButton,
	decorators: [
		Story => (
			<div style={{ width: '120px' }}>
				<Story />
			</div>
		)
	]
}

export default meta
type Story = StoryObj<typeof HomeNavbarButton>

export const Main: Story = {}
