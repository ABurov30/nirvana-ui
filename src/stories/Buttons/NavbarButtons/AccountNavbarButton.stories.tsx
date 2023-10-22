import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import AccountNavbarButton from '../../../ui/Buttons/NavbarButtons/AccountNavbarButton/AccountNavbarButton'

const meta: Meta<typeof AccountNavbarButton> = {
	component: AccountNavbarButton,
	decorators: [
		Story => (
			<div style={{ width: '120px' }}>
				<Story />
			</div>
		)
	]
}

export default meta
type Story = StoryObj<typeof AccountNavbarButton>

export const Main: Story = {}
