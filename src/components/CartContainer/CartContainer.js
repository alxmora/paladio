import { useContext } from "react";
import CartContext from "../../context/CartContext"
import CartList from "../CartList/CartList";
import { Link, useNavigate } from "react-router-dom";
import { MdKeyboardBackspace } from 'react-icons/md'

const CartContainer = () => {

    const { cart, total, clearCart } = useContext(CartContext)

    const currencyFormat = (num) => {
        return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

    const navigate = useNavigate()

    return (
        <>
            {
                cart.length > 0 ?
                    <div className="container">
                        <div className="row mt-lg-5 mt-0">
                            <div className="col-12 d-flex align-items-end justify-content-between">
                                <Link className="cm-link mt-5 ms-2" to={'/'}> <MdKeyboardBackspace className="me-4" />  Continúa comprando</Link>
                                <h4>Carrito de compras</h4>
                            </div>
                            <div className="col-12 text-center">
                                <CartList cart={cart} />
                            </div>
                            <div className="col-lg-6 col-12 mb-5">
                                <button className="removeItem" onClick={clearCart}>Eliminar Todo</button>
                                <button className="btnFinalizaCompra mt-2" onClick={() => navigate('/checkout')}>Checkout</button>
                            </div>
                            <div className="col-lg-6 col-12 text-end mb-5">
                                <div className="row d-flex align-items-center justify-content-end">
                                    <div className="col-lg-8 col-12">
                                        <div className="row">
                                            <div className="col-8 text-start">
                                                <p style={{ color: '#999' }}>Subtotal:</p>
                                            </div>
                                            <div className="col-4 text-end">
                                                <p>{currencyFormat(total)}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row d-flex align-items-center justify-content-end">
                                    <div className="col-lg-8 col-12">
                                        <div className="row" style={{ borderBottom: '1px solid #CCC' }}>
                                            <div className="col-8 text-start">
                                                <p style={{ color: '#999' }}>Envío:</p>
                                            </div>
                                            <div className="col-4 text-end">
                                                <p>Gratis</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row d-flex align-items-center justify-content-end mt-4">
                                    <div className="col-lg-8 col-12">
                                        <div className="row">
                                            <div className="col-8 text-start">
                                                <h5>Total:</h5>
                                            </div>
                                            <div className="col-4 text-end">
                                                <h5><span className="fw-bolder">{currencyFormat(total)}</span></h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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