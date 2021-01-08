import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'

import CartoonButton from './CartoonButton'
import { CartoonButtonProps } from './CartoonButton.types'

export default {
    title: 'Design System/Atoms/CartoonButton',
    component: CartoonButton
} as Meta

const Template: Story<CartoonButtonProps> = (args) => <CartoonButton {...args} />

export const Square = Template.bind({})
Square.args = {
    label: 'Label',
    variant: 'square'
}

export const Circle = Template.bind({})
Circle.args = {
    label: 'Label',
    variant: 'circle'
}
