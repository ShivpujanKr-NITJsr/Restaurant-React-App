import CartContext from '../../store/cart-context'
import classes from './SingleDesign.module.css'

import React, { useContext } from 'react'

const SingleDesign=(props)=>{

    const cartctnx=useContext(CartContext)
    const decreaseQuantity=(event)=>{
        event.preventDefault()
        if(props.quantity===1){
            cartctnx.removeItem(props.id)
        }else{
            cartctnx.mergeItem(props.item,-1)
        }
    }

    const increaseQuantity=(event)=>{
        event.preventDefault()

        if(props.quantity===5){
            alert('more than 5 not allowed')
            return
        }else{
            cartctnx.mergeItem(props.item,1)
        }
    }
    return <div className={classes.global}>
        <h3>{props.name}</h3>
        <label> ${props.price}</label>
        <label className={classes.quantity}> x{props.quantity}</label>

        <div className={classes.button}>
            <button className={classes.minus} onClick={decreaseQuantity}> - </button>
            <button className={classes.plus} onClick={increaseQuantity}> + </button>
        </div>
        <hr style={{color:'brown',backgroundColor:'gray',height:'.2rem'}}></hr>
    </div>
}

export default SingleDesign