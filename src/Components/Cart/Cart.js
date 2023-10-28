
import React,{ useContext } from 'react';
import Modal from '../UI/Modal';
import classes from './Cart.module.css'
import CartContext from '../../store/cart-context';

const Cart =props=>{

    const cartctx=useContext(CartContext)
    // const cartItems=<ul className={classes['cart-items']}>{[{id: 'c1', name : 'Sushi', amount:2 ,price: 12.99},].map((item)=> <li>{item.name} key={item.id}</li>)}</ul>

    
    const cartItems=<ul className={classes['cart-items']}> {cartctx.items.map((item)=> <li key={Math.random().toString()}>Name:{item.name}, Quantity:{item.quantity}, Price:{item.price} </li>)}</ul>

    const amount=cartctx.items.reduce((acc,item)=>{return Number(item.quantity)*Number(item.price)+acc},0)

    return <Modal onClose={props.onClose}>
        {cartItems}
        
        <div className={classes.total}></div>
        <span> Total Amount </span>
        <span>{amount}</span>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
            <button className={classes.button}>Order</button>
        </div>
    </Modal>
};


export default Cart