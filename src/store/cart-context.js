
import React from "react";


const CartContext=React.createContext({
    items: [],
    totalAmount: 0,

    addItem:(item)=>{},
    removeItem:(id)=>{},
    mergeItem:(itemToUpdate,quantity)=>{}
})


export default CartContext