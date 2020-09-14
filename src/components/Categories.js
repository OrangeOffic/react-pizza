import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {setCategory} from "../redux/actions/filters";

const Categories = ({items}) => {

    const dispatch = useDispatch()
    const {category} = useSelector(state => state.filters)

    return (
        <div className="categories">
            <ul>
                <li
                    onClick={() => dispatch(setCategory(null))}
                    className={category === null ? "active" : null}
                >Все</li>
                {
                    items && items.map((item, index) => {
                        return (
                            <li
                                key={index}
                                onClick={() => dispatch(setCategory(index))}
                                className={category === index ? "active" : null}
                            >{item}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Categories