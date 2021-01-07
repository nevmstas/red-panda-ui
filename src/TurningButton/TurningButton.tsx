import React, { ReactElement } from 'react'
import { PropsType } from './TurningButton.types'
import './TurningButton.scss'

const TurningButton: React.FC<PropsType> = ({ label, incline = 'right', size, ...args }): ReactElement => {
    return (
        <button className={`turning-button turning-button-${incline} ${size}`} {...args}>
            {label}
        </button>
    )
}

export default TurningButton
