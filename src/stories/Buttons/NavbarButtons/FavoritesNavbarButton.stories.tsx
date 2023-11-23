import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import FavoritesNavbarButton from '../../../ui/Buttons/NavbarButtons/presets/FavoritesNavbarButton/FavoritesNavbarButton'

const meta: Meta<typeof FavoritesNavbarButton> = {
	component: FavoritesNavbarButton,
	decorators: [
		Story => (
			<div style={{ width: '120px' }}>
				<Story />
			</div>
		)
	]
}

export default meta
type Story = StoryObj<typeof FavoritesNavbarButton>

export const Main: Story = {}
