import type { Meta, StoryObj } from '@storybook/react'

import NavSection from '../ui/NavSection/NavSection'

const meta: Meta<typeof NavSection> = {
	component: NavSection,
	  decorators: [(Story) => <div style={{width: '500px' }}><Story /></div>],
}

export default meta
type Story = StoryObj<typeof NavSection>

export const Primary: Story = {
	args: {
		children: (
			<>
				<div>NavButton</div>
				<div>NavButton</div>
				<div>NavButton</div>
				<div>NavButton</div>
			</>
		)
	}
}
