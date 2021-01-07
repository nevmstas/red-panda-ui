import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'

import TurningButton from './TurningButton'
import { PropsType } from './TurningButton.types'

export default {
    title: 'Design System/Atoms/TurningButton',
    component: TurningButton
} as Meta

const Template: Story<PropsType> = (args) => <TurningButton {...args} />

export const Primary = Template.bind({})
Primary.args = {
    label: 'Label'
}

export const Disabled = Template.bind({})
Disabled.args = {
    label: 'Label',
    disabled: true
}

export const Right = Template.bind({})
Right.args = {
    label: 'Label',
    incline: 'left'
}
