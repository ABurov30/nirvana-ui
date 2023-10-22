import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import RadioNavbarButton from '../../../ui/Buttons/NavbarButtons/RadioNavbarButton/RadioNavbarButton'

const meta: Meta<typeof RadioNavbarButton> = {
	component: RadioNavbarButton,
	decorators: [
		Story => (
			<div style={{ width: '120px' }}>
				<Story />
			</div>
		)
	]
}

export default meta
type Story = StoryObj<typeof RadioNavbarButton>

export const Main: Story = {}
