import CartContext from '../../../store/cart-context'
import Input from '../../UI/Input'
import classes from './MealItemForm.module.css'

import React,{useContext} from 'react'

const MealItemForm =props=>{

    const cartcntx= useContext(CartContext)
    const addItemToCart=(event)=>{
        //update the cart context
        const quantity=document.getElementById('amount_'+props.id).value
        event.preventDefault()
        if(quantity>5 || quantity<1) {
            alert('only in range of 1 to 5 allowed')
            return ;
        }
        let index=cartcntx.items.filter((p)=>p.id===props.item.id);
        
        if(index.length===0){

            cartcntx.addItem( {...props.item,quantity:quantity})
        }else{

            const itemToUpdate = cartcntx.items.find(item => item.id === props.item.id);
            if(itemToUpdate){
                cartcntx.mergeItem(itemToUpdate,quantity)
            }
        }
        // cartcntx.mergeItem()
        console.log(cartcntx.items)
    }
    return <form className={classes.form}>
        {/* {console.log(cartcntx)} */}
        <Input label="Amount" input={{
            id:'amount_'+props.id,
            type:'number',
            min:'1',
            max:'5',
            step:'1',
            defaultValue: '1'
        }}/>
        <button onClick={addItemToCart}> + Add</button>
    </form>

}

export default MealItemForm