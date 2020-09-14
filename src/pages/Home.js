import React from "react"
import { useSelector } from 'react-redux'


import Categories from "../components/Categories";
import SortPopup from "../components/SortPopup";
import PizzaBlock from "../components/PizzaBlock";


const Home = () => {

    const {isLoading, items} = useSelector(state => state.pizzas)
    const cartItems = useSelector(state => state.cart.items)
    const {category, sortBy} = useSelector(state => state.filters)

    function sortItems() {
        switch (sortBy) {
            case 0:
                return items.sort((a, b) => {
                    return b.rating - a.rating
                })
            case 1:
                return items.sort((a, b) => a.price - b.price)
            case 2:
                return items.sort((a, b) => a.name < b.name)
            default:
                return
        }
    }


    return (
        <div className="container">
            <div className="content__top">
                <Categories items={['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']} />
                <SortPopup items={[
                    {name: 'популярности', type: 'popular'},
                    {name: 'цене', type: 'price'},
                    {name: 'алфавиту', type: 'alphabet'}]}
                />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    isLoading
                        ? <h1>Загрузка...</h1>
                        : sortItems().map((product, index) => {
                            if (category === product.category) {
                                return (
                                    <PizzaBlock
                                        pizza={product}
                                        addedCount={cartItems[product._id] && cartItems[product._id].length}
                                        key={index + product.name}
                                    />
                                )
                            }
                            if (category === null) {
                                return (
                                    <PizzaBlock
                                        pizza={product}
                                        addedCount={cartItems[product._id] && cartItems[product._id].length}
                                        key={index + product.name}
                                    />
                                )
                            }
                        })
                }
            </div>
        </div>
    )
}

export default Home