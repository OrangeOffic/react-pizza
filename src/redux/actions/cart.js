export const setTotalPrice = (totalPrice) => {
    return {
        type: 'SET_TOTAL_PRICE',
        payload: totalPrice
    }
}

export const setTotalCount = (totalCount) => {
    return {
        type: 'SET_TOTAL_COUNT',
        payload: totalCount
    }
}

export const addToCart = (pizza) => {
    return {
        type: 'ADD_TO_CART',
        payload: pizza
    }
}

export const clearCart = () => {
    return {
        type: 'CLEAR_CART'
    }
}

export const addCounter = (id) => {
    return {
        type: 'ADD_COUNTER',
        payload: {id}
    }
}

export const deleteCounter = (id) => {
    return {
        type: 'DELETE_COUNTER',
        payload: {id}
    }
}

export const deletePizza = (id) => {
    return {
        type: 'DELETE_PIZZA',
        payload: id
    }
}

export const setCart = (items) => {
    return {
        type: 'SET_CART',
        payload: items
    }
}