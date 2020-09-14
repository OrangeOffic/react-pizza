const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0
}

const cart = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_TOTAL_PRICE':
            return {
                ...state,
                totalPrice: action.payload
            }
        case 'SET_TOTAL_COUNT':
            return {
                ...state,
                totalCount: action.payload
            }
        case 'ADD_TO_CART':

            const newItems = {
                ...state.items,
                [action.payload.id]: !state.items[action.payload.id] ? [action.payload] : [...state.items[action.payload.id], action.payload]
            }

            return {
                ...state,
                items: newItems,
                totalCount: [].concat.apply([], Object.values(newItems)).length,
                totalPrice: [].concat.apply([], Object.values(newItems)).reduce((total, obj) => total + obj.price, 0)
            }
        // case 'DELETE_PIZZA':
        //
        case 'CLEAR_CART':
            return {
                ...initialState
            }
        case 'ADD_COUNTER':

            const addItems = {
                ...state.items,
                [action.payload.id]: [
                    ...state.items[action.payload.id],
                    state.items[action.payload.id][0]
                ]
            }

            return {
                ...state,
                items: addItems,
                totalPrice: [].concat.apply([], Object.values(addItems)).reduce((total, obj) => total + obj.price, 0),
                totalCount: [].concat.apply([], Object.values(addItems)).length
            }
        case 'DELETE_COUNTER':

            const newItemsById = [
                ...state.items[action.payload.id]
            ]

            newItemsById.pop()

            const deleteItems = {
                ...state.items,
                [action.payload.id]: [
                    ...newItemsById
                ]
            }


            return {
                ...state,
                items: deleteItems,
                totalPrice: [].concat.apply([], Object.values(deleteItems)).reduce((total, obj) => total + obj.price, 0),
                totalCount: [].concat.apply([], Object.values(deleteItems)).length
            }
        case 'DELETE_PIZZA':

            const newItemsFromId = {
                ...state.items
            }

            delete newItemsFromId[action.payload]

            return {
                ...state,
                items: newItemsFromId,
                totalPrice: [].concat.apply([], Object.values(newItemsFromId)).reduce((total, obj) => total + obj.price, 0),
                totalCount: [].concat.apply([], Object.values(newItemsFromId)).length
            }
        default: {
            return state
        }
    }
}

export default cart