import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import SettingsNavbarButton from '../../../ui/Buttons/NavbarButtons/presets/SettingsNavbarButton/SettingsNavbarButton'

const meta: Meta<typeof SettingsNavbarButton> = {
	component: SettingsNavbarButton,
	decorators: [
		Story => (
			<div style={{ width: '120px' }}>
				<Story />
			</div>
		)
	]
}

export default meta
type Story = StoryObj<typeof SettingsNavbarButton>

export const Main: Story = {}
