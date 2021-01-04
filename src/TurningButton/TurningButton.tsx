import React, { ReactElement } from 'react'
import { PropsType } from './TurningButton.types'
import './TurningButton.scss'

const TurningButton: React.FC<PropsType> = ({ label }): ReactElement => {
    return <button className="turning-button">{label}</button>
}

export default TurningButton
