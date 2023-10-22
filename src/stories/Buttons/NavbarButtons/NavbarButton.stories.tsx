import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import NavbarButton from '../../../ui/Buttons/NavbarButtons/NavbarButton/NavbarButton'

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

export const Main: Story = {}
