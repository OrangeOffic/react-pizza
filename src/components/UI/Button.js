import React from 'react'

const Button = (props) => {

    const cls = [
        'button',
        props.outline && 'button--outline',
        props.add && 'button--add'
    ]

    return (
        <div className={cls.join(' ')}>{props.children}</div>
    )
}

export default Button