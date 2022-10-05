// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

const initialState = {
    cart: [],
};

const useInitialState= () =>{
    const [state, setState] = useState(initialState);

    const addToCart = (payload)=> {(
        setState({
            ...state,
            cart: [...state.cart, payload]
        })
    )};

    // const removeFromCart = (payload) => {
    //     setState({
    //       ...state,
    //       cart: state.cart.filter(items => items.id !== payload.id),
    //     })
    //   }

    const removeFromCart = (indexValue) => {
        setState({
            ...state,
            cart: state.cart.filter((product,index) => index !== indexValue),
        })
    }

    return{
        state,
        addToCart,
        removeFromCart
    }
}

export default useInitialState;