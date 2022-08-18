import { useContext } from "react";
import CartContext from "../../context/CartContext"
import CartList from "../CartList/CartList";
import { Link } from "react-router-dom";
import './CartContainer.css'


const CartContainer = () => {

const {cart} = useContext(CartContext)
    return (
        <>
            {
                cart.length > 0 ? 
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-12 text-center">
                            <h1>Carrito de compras</h1>
                            <CartList cart={cart}/>
                        </div>
                    </div>
                </div> :
                <div className="container">
                <div className="row mt-5">
                    <div className="col-12 text-center">
                        <h1>Tu carrito está vacío</h1>
                        <Link className="btn btn-dark mt-5" to={'/'}>Continúa comprando</Link>
                    </div>
                </div>
            </div>

            }
        </>
    )
}

export default CartContainer