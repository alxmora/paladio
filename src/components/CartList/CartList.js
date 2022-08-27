import CartElement from "../CartElement/CartElement"; 
import { useContext } from "react";
import CartContext from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartList = ({cart}) => {


    return (
        <div className='container mt-5 mb-5'>
            <div className='row'>
                {cart.map(item => <CartElement key={item.id} item={item}/>)}
            </div>
        </div>
    )
}

export default CartList