import axios from 'axios'

export const fetchPizza = () => (dispatch) => {
    async function getPizzas() {
        await axios.get('http://localhost:3001/api/products')
            .then((res) => dispatch(setPizzas(res.data)))
            .catch((e) => console.log(e))

        dispatch(setLoading(false))
    }

    getPizzas().then((res) => res)
}

export const setPizzas = (items) => ({
    type: 'SET_PIZZAS',
    payload: items
})

export const setLoading = (state) => ({
    type: 'SET_LOADING',
    payload: state
})