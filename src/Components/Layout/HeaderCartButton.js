import { useContext } from "react"
import CartIcon from "../Cart/CartIcon"
import classes from './HeaderCartButton.module.css'
import CartContext from "../../store/cart-context"



const HeaderCartButton = props =>{



    const cartCtx=useContext(CartContext)

    let quantity=0;
    cartCtx.items.forEach((item)=>
    { 
        quantity=Number(quantity)+Number(item.quantity);
    });

    const cartHandler=(event)=>{
        event.preventDefault();
        props.onClick();
    }

    return <button className={classes.button}  onClick={cartHandler} >
        <span className={classes.icon}>
            
            <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>
            {quantity}
        </span>
    </button>
}


export default HeaderCartButton

