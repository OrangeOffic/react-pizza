import React, {useState} from 'react'
import classNames from 'classnames'
import Button from "./UI/Button";
import {useDispatch} from "react-redux";
import {addToCart} from "../redux/actions/cart";

const PizzaBlock = ({pizza, addedCount}) => {

    const dispatch = useDispatch()

    const {_id, imageUrl, price, name} = pizza

    const typesName = ['Тонкое', 'Традиционное']
    const sizesName = [26, 30, 40]

    let [activeType, setActiveType] = useState(0)
    let [activeSize, setActiveSize] = useState(26)

    const onSelectActiveType = (type) => {
        setActiveType(type)
    }

    const onSelectActiveSize = (size) => {
        setActiveSize((size))
    }

    const onClickPizza = ({_id, name, price, size, type, imageUrl}) => {


        const pizza = {
            id: _id,
            name,
            price,
            imageUrl,
            size,
            type
        }

        dispatch(addToCart(pizza))

    }

    return (
        <div
            className="pizza-block"
        >
            <img
                className="pizza-block__image"
                src={imageUrl}
                alt="Pizza"
            />
            <h4 className="pizza-block__title">{name}</h4>
            <div className="pizza-block__selector">
                <ul>
                    {
                        typesName.map((type, index) => (
                            <li
                                key={index + type}
                                onClick={() => onSelectActiveType(index)}
                                className={classNames({
                                    active: activeType === index && (pizza.types.includes(index) || setActiveType(pizza.types[0])),
                                    disabled: !pizza.types.includes(index)
                                })
                                }>{type}</li>
                        ))
                    }
                </ul>
                <ul>
                    {
                        sizesName.map((size, index) => (
                            <li
                                key={index + size}
                                onClick={() => onSelectActiveSize(size)}
                                className={classNames({
                                    active: activeSize === size && (pizza.sizes.includes(size) || setActiveSize(+pizza.sizes[0])),
                                    disabled: !pizza.sizes.includes(size)
                                })}
                            >{size} см.</li>
                        ))
                    }
                </ul>
            </div>
            <div className="pizza-block__bottom">
                <div className="pizza-block__price">от {price} ₽</div>
                <Button
                    onClick={() => onClickPizza({_id, name, price, size: activeSize, type: activeType, imageUrl})}
                    add
                    outline>
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                            fill="white"
                        />
                    </svg>
                    <span>Добавить</span>
                    {
                        addedCount && <i>{addedCount}</i>
                    }
                </Button>
            </div>
        </div>
    )
}

export default PizzaBlock