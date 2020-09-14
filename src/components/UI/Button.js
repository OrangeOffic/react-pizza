
import React from 'react'

const Button = ({className, outline, add, onClick, children}) => {

    const cls = [
        'button',
        className,
        outline && 'button--outline',
        add && 'button--add'
    ]

    return (
        <button
            className={cls.join(' ')}
            onClick={onClick}
        >{children}</button>
    )
}

export default Button