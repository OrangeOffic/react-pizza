import React, {useEffect} from 'react';
import { Route } from 'react-router-dom'
import {useDispatch} from "react-redux";

import './App.css';

import Header from "./components/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

import {fetchPizza} from "./redux/actions/pizzas";


function App() {

    const dispatch = useDispatch()

    useEffect(() => {

        dispatch(fetchPizza())

    }, [])

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
