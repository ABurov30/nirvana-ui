import type { Meta, StoryObj } from '@storybook/react'

import UserPanel from '../ui/UserPanel/UserPanel'

const meta: Meta<typeof UserPanel> = {
	component: UserPanel
}

export default meta
type Story = StoryObj<typeof UserPanel>

export const Main: Story = {}
