
import React,{ useContext } from 'react';
import Modal from '../UI/Modal';
import classes from './Cart.module.css'
import CartContext from '../../store/cart-context';
import SingleDesign from './SingleDesign';

const Cart =props=>{

    const cartctx=useContext(CartContext)
    // const cartItems=<ul className={classes['cart-items']}>{[{id: 'c1', name : 'Sushi', amount:2 ,price: 12.99},].map((item)=> <li>{item.name} key={item.id}</li>)}</ul>

   
    // if(m.size!==cartctx.items.length){

    //     cartctx.mergeItem(p)
    // }
    // <h3>{item.name}</h3><div> </div>
    const cartItems=<ul className={classes['cart-items']}> {cartctx.items.map((item)=> <SingleDesign item={item} key={Math.random().toString()} name={item.name} quantity={item.quantity} price={item.price}  id={item.id}>Name:{item.name}, Quantity:{item.quantity}, Price:{item.price} </SingleDesign>)}</ul>

    const amount=cartctx.items.reduce((acc,item)=>{return Number(item.quantity)*Number(item.price)+acc},0)

    return <Modal onClose={props.onClose}>
        {cartItems}
        
        <div className={classes.total}></div>
        <span> Total Amount </span>
        <span>{amount.toFixed(2)}</span>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
            <button className={classes.button}>Order</button>
        </div>
    </Modal>
};


export default Cart