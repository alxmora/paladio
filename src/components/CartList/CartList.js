import CartElement from "../CartElement/CartElement"; 
import { useState, useContext } from "react";
import CartContext from "../../context/CartContext";
import { useEffect } from "react";
const CartList = ({cart}) => {
    const {total} = useContext(CartContext)

    const currencyFormat = (num) => {
        return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

    return (
        <div className='container mt-5 mb-5'>
            <div className='row'>
                {cart.map(item => <CartElement key={item.id} item={item}/>)}
            </div>
            <div className="row">
                <div className="col-12 text-end mt-5">
                    <h5>Total: <span className="fw-bolder">{currencyFormat(total)}</span></h5>
                </div>
            </div>
        </div>
    )
}

export default CartList