
const initialState = {
    items: [],
    isLoading: true
}

const pizzas = (state = initialState, action) => {
    if (action.type === 'SET_PIZZAS') {
        return {
            ...state,
            items: action.payload,
        }
    }

    if (action.type === 'SET_LOADING') {
        return {
            ...state,
            isLoading: action.payload
        }
    }
    return state
}

export default pizzas