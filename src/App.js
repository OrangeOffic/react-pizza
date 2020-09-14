import React, {useEffect} from 'react';
import { Route } from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux";

import './App.css';

import Header from "./components/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

import {fetchPizza} from "./redux/actions/pizzas";
import {setCart} from "./redux/actions/cart";


function App() {

    const dispatch = useDispatch()

    const pizzas = useSelector(state => state.cart.items)

    useEffect(() => {

      dispatch(fetchPizza())

      dispatch(setCart(JSON.parse(localStorage.getItem('pizzas'))))

    }, [])

    useEffect(() => {
      localStorage.setItem('pizzas', JSON.stringify(pizzas))
    }, [pizzas])

    return (
        <div className="wrapper">
            <Header />
            <div className="content">
                <Route path="/" exact component={Home}/>
                <Route path="/cart" exact component={Cart}/>
            </div>
        </div>
    );
}

export default App;
