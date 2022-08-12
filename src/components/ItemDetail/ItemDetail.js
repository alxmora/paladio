import { useState, useContext } from "react"
import ItemCount from "../ItemCount/ItemCount"
import './ItemDetail.css'
import {Link} from 'react-router-dom'
import CartContext from "../../context/CartContext"

const ItemDetail = (({product}) => {
    const {addItem, getQuantityById} = useContext(CartContext)
    const {id, name, img, price, stock, description} = product

    const Swal = require('sweetalert2')

    const [quantity, setQuantity] = useState(0)

    const itemQuantity = getQuantityById(id)
    const currencyFormat = (num) => {
        return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

    const handleOnAdd = (quantity) => {
        Swal.fire(
            'Artículo agregado al carrito!',
            `Agregaste ${quantity} ${quantity > 1 ? 'piezas' : 'pieza'}`,
            'success'
        )
        const itemToAdd = {id, name, price, quantity}
        addItem(itemToAdd)
        setQuantity(quantity)
    }

    return (
        <div className="container">
            <div className="row mb-5">
                <div className="col-lg-7 col-md-7 mb-md-0 col-sm-12 col-12 mb-5">
                    <div className="itemDetailImage" style={{backgroundImage: `url(${img})`, width: '100%', height: '60vh', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center center'}}></div>
                </div>
                <div className="col-lg-5 col-md-5 col-sm-12 col-12 d-flex flex-column">
                    <h1>{name}</h1>
                    <h4>{currencyFormat(price)} MXN</h4>
                    <hr />
                    <p>{description}</p>
                    <p>{stock > 0 ? `Disponibles (${stock})` : 'Sin existencias'}</p>
                    <div className="mt-auto">
                        {
                            quantity === 0 ? (
                                <ItemCount stock={stock} initial={itemQuantity} onAdd={handleOnAdd} />
                            ) : (
                                    <Link className="btnFinalizaCompra" to='/cart'>Finalizar compra</Link>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
})

export default ItemDetail