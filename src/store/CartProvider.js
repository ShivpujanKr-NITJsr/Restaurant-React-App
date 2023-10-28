import { useState } from 'react'
import CartContext from './cart-context'

// let items=[]
const CartProvider =props=>{
    
    const [ items, updateItems]=useState([]);


    const addItemToCartHandler = item =>{
        updateItems([item,...items])
        console.log('inside cartProvider ',CartContext)
    }

    const removeItemFromHandler=id =>{}

    const cartContext ={
        items: items || [],
        totalAmount:0,
        addItem: addItemToCartHandler,
        removeItem:removeItemFromHandler
    }

    return <CartContext.Provider  value={cartContext}>
        {props.children}
    </CartContext.Provider>
}


export default CartProvider