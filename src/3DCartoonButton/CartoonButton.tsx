import React, { ReactElement } from 'react'
import { CartoonButtonProps } from './CartoonButton.types'
import './CartoonButton.scss'

const CartoonButton: React.FC<CartoonButtonProps> = ({ label, size, variant = 'circle', ...args }): ReactElement => {
    return (
        <button className={`cartoonBtn cartoonBtn-${variant} ${size}`} {...args}>
            {label}
        </button>
    )
}

export default CartoonButton
