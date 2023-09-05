import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import Card from '../ui/Card/Card'

const DivDecorator = storyFn => (
	<div style={{width: 300, height: 300, margin: 'auto'}}>
		{storyFn()}
	</div>
)

const meta: Meta<typeof Card> = {
	component: Card,
	decorators: [DivDecorator],
}



export default meta
type Story = StoryObj<typeof Card>

export const MeteoraCard: Story = {
	args: {
		srcImg: '/img/Meteora.jpg',
		title: 'Meteora',
		artist: 'Linkin park'
	}
}
