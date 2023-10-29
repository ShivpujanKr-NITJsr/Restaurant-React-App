import { useState } from 'react'
import CartContext from './cart-context'

// let items=[]
const CartProvider = props => {

    const [items, updateItems] = useState([]);


    const addItemToCartHandler = item => {
        updateItems([item, ...items])

        console.log('inside cartProvider ', CartContext)
    }

    const removeItemFromHandler = id => {

        let z = [...items];
        z = z.filter(it => it.id !== id);
        updateItems([...z])
    }

    const mergeItem = (itemToUpdate, quantity) => {
        let z = [...items];

        for (let i = 0; i < z.length; i++) {
            if (z[i].id === itemToUpdate.id) {
                itemToUpdate.quantity = Number(itemToUpdate.quantity) + Number(quantity);
            }
        }

        updateItems([...z])


    }
    const cartContext = {
        items: items || [],
        totalAmount: 0,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromHandler,
        mergeItem: mergeItem
    }

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}


export default CartProvider